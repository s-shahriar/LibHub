import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import useAxiosSecure from "../Hooks/useAxiosSecure";
  
  export const AuthContext = createContext({
      user: null,
      loading: true,
      createUser: () => {},
      signIn: () => {},
      logOut: () => {},
      googleLogin: () => {},
      githubLogin: () => {},
      setLoading: () => {},
      updateUser: () => {},
    });
  
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  
  const AuthProvider = ({ children }) => {

    const axiosSecure = useAxiosSecure();
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const signIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
  
    const logOut = async() => {
      setLoading(true)
      const res = await axiosSecure('/logout');
      setUser(null);
      console.log("logging out")
      console.log(res);
      return signOut(auth);
    };
  
    const googleLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    const githubLogin = () => {
      setLoading(true);
      return signInWithPopup(auth, githubProvider);
    };

    const updateUser = (userInfo) => {
      setLoading(true)
      return updateProfile(auth.currentUser, userInfo);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        const userEmail = currentUser?.email || user?.email;
        const loggedUser = { email: userEmail };

        if (currentUser) {
          try {
            const res = await axiosSecure.get(`/userExists/${currentUser.email}`);
            const userDisplayName = currentUser.displayName;

            if (!res.data.exists) {
              // If user doesn't exist, add them to the database
              const newUser = {
                email: userEmail,
                name: userDisplayName || userEmail, // Use email if displayName is not available
                role: 'normal',
                borrowedBooks: []
              };
              
              const userAdd = await axiosSecure.post('/userAdd', newUser);

              // removed early JWT
              // const sendingJWT = await axiosSecure.post('/jwt', loggedUser);
              
              
              console.log(res.data)
            }
          } catch (error) {
            console.error('Error checking user existence:', error);
          }
          setUser(currentUser);
        }
        //   else {
        //   axiosSecure('/logout', loggedUser)
        //   .then(res  => {
        //     console.log('from logout route', res.data);
        //   })
        // }
        setLoading(false); 
      });
      return () => unsubscribe();
    }, []);
  
    const values = {
      user,
      loading,
      createUser,
      signIn,
      logOut,
      googleLogin,
      githubLogin,
      updateUser,
      setLoading,
    };
  
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
  };
  export default AuthProvider;