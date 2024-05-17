import axios from "axios";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

const useAxiosSecure = () => {
    // const { logOut, setLoading ,loading } = useAuth();
    // useEffect(() => {
    //     axiosSecure.interceptors.response.use(res => {
    //         //console.log("interceptor res == ", res);
    //         setLoading(false)
    //         return res;
    //     }, error => {
    //         console.log('intercepted axios error', error)
    //         if (error) {
    //             console.log(error.data)
    //             console.log('logout the user')
    //             // logOut()
    //             //     .then(() => { 
    //             //         console.log("from negative", loading)
    //             //         setLoading(false); // Set loading to false after logout
    //             //         window.location.href = '/login'
    //             //     })
    //             //     .catch(error => console.log(error))
    //         }
    //     })
    // }, [])

    return axiosSecure;
};

export default useAxiosSecure;