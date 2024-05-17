import { Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import BookList from "../../Components/BookList";
import ListView from "../../Components/ListView";
import LoadingSpinner from "../../Components/LoadingSpinner";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BorrowedBooks = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userEmail, setUserEmail] = useState(null);
  const [books, setBooks] = useState([]);
  const [viewType, setViewType] = useState("Card View");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      if (userEmail) {
        try {
          const res = await axiosSecure.get(`/borrowed-books/${userEmail}`);
          setBooks(res.data);
          setLoading(false);
        } catch (error) {}
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchUserData = async () => {
    if (user) {
      setUserEmail(user.email);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [user]);

  useEffect(() => {
    fetchData();
  }, [userEmail]);

  const handleReturn = async (bookId) => {
    setLoading(true);
    try {
      const response = await axiosSecure.patch(`/return-book/${bookId}`, {
        email: user.email,
      });
      setLoading(false)
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Book has been returned successfully",
        });
        fetchData();
      }
    } catch (error) {
      setLoading(false)
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="text-center my-8">
        <h6 className="text-center uppercase text-blue-500 text-2xl font-bold">
          Borrowed Books
        </h6>
      </div>

      <div className="flex justify-center mb-5 space-x-4">
        <div className="relative bg-[#0f172b] rounded-lg">
          <Dropdown label={`Toggle View: ${viewType}`} dismissOnClick={false}>
            <Dropdown.Item
              className="dark:hover:bg-[#0f172b] text-black dark:text-white"
              onClick={() => setViewType("Card View")}
            >
              Card View
            </Dropdown.Item>
            <Dropdown.Item
              className="dark:hover:bg-[#0f172b] text-black dark:text-white"
              onClick={() => setViewType("List View")}
            >
              List View
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="text-center mb-5">
        <p className="text-xl font-bold text-black-600">
          Total Books in the Library: {books.length}
        </p>
      </div>

      {viewType === "Card View" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10">
          {books.map((book, idx) => (
            <BookList
              key={idx}
              data={book}
              isBorrowed={true}
              onReturn={handleReturn}
            />
          ))}
        </div>
      ) : (
        <ListView data={books} isBorrowed={true} onReturn={handleReturn} />
      )}
    </>
  );
};

export default BorrowedBooks;
