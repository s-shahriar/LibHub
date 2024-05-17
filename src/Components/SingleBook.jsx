import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const SingleBook = ({ data, onBookBorrowed }) => {
  const MySwal = withReactContent(Swal);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [returnDate, setReturnDate] = useState(new Date().toLocaleDateString());
  const isAvailable = data.quantity > 0;

  const modalOnChange = (date) => {
    const newDate = new Date(date).toLocaleDateString();
    setReturnDate(newDate);
  };
  

  const openBorrowModal = () => {

    MySwal.fire({
      title: "Borrow Book",
      html: (
        <form className="m-auto flex flex-col items-center justify-center">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              defaultValue={user.displayName}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              defaultValue={user.email}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="returnDate" className="form-label">
              Return Date:
            </label>
            <br />
            <input
              type="text"
              className="form-control"
              id="date"
              defaultValue={returnDate}
              readOnly
            />
          </div>
        </form>
      ),
      showCancelButton: true,
      confirmButtonText: "Borrow",
      cancelButtonText: "Cancel",
      showLoaderOnConfirm: true,
      preConfirm: async () => {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const returnDate = document.getElementById("date").value;

        try {
          const response = await axiosSecure.post(
            `/borrow-book/${data._id}?email=${user?.email}`,
            {
              email,
              displayName: name,
              returnDate,
            }
          );
          return response.data.message; // Return the message for later use
        } catch (error) {
          throw new Error(error.response.data.message); // Throw an error with the message
        }
      },
    })
      .then((result) => {
        if (result.isConfirmed) {

          // Check if the message is one of the specified error messages
          if (
            result.value === "You have already borrowed this book" ||
            result.value === "You have reached the maximum borrowing limit"
          ) {
            Swal.fire("Unsuccessful", result.value, "error");
          } else {
            Swal.fire("Borrowed", "Book has been borrowed", "success");
            const updatedData = { ...data, quantity: data.quantity - 1 };
            onBookBorrowed(updatedData);
          }
        }
      })
      .catch((error) => {
        Swal.fire("Error!", error.message, "error");
      });
      
  };

  return (
    <div
      className={
        "container card lg:card-side shadow-2xl flex flex-col lg:flex !items-start mb-10 rounded-lg border-2 mt-6 border-gray-400 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700"
      }
    >
      <figure className="w-full lg:w-1/2 p-4 md:p-8 lg:p-8">
        <img
          src={data.image}
          alt={data.name}
          className="rounded-lg"
          style={{ width: "100%", maxHeight: "500px", height: "auto" }}
        />
      </figure>
      <div className="card-body w-full lg:w-1/2">
        <h2
          style={{ fontSize: "clamp(1.25rem, 1.912vw + 0.868rem, 2rem)" }}
          className="card-title dark:text-white text-black"
        >
          {data.name}
        </h2>
        <div className="flex gap-2 mt-3">
          <p
            style={{ fontSize: "0.875rem", fontWeight: "bold" }}
            className="text-blue-500 flex-grow-0"
          >
            Author:
          </p>
          <p
            className="dark:text-white text-black"
            style={{ fontSize: "0.875rem" }}
          >
            {data.author}
          </p>
        </div>
        <hr className="my-4 border-gray-400" />
        <div>
          <p
            style={{ fontSize: "0.875rem", fontWeight: "bold" }}
            className="text-blue-500"
          >
            Description:
          </p>
          <p
            className="dark:text-white text-black"
            style={{ fontSize: "0.875rem" }}
          >
            {data.description}
          </p>
        </div>
        <hr className="my-4 border-gray-400" />
        <div className="flex gap-2">
          <p
            style={{ fontSize: "0.875rem", fontWeight: "bold" }}
            className="text-blue-500 flex-grow-0"
          >
            Rating:
          </p>

          <div className="flex items-center">
            {Array.from({ length: Math.floor(data.rating) }).map((_, index) => (
              <AiFillStar key={index} className="text-blue-500" />
            ))}
            {Array.from({ length: 5 - Math.floor(data.rating) }).map(
              (_, index) => (
                <AiOutlineStar key={index} className="text-blue-500" />
              )
            )}
          </div>

        </div>

        <div className="flex gap-2">
          <p
            style={{ fontSize: "0.875rem", fontWeight: "bold" }}
            className="text-blue-500 flex-grow-0"
          >
            Quantity:
          </p>
          <p
            className="dark:text-white text-black"
            style={{ fontSize: "0.875rem" }}
          >
            {data.quantity}
          </p>
        </div>
        <div className="flex gap-2">
          <p
            style={{ fontSize: "0.875rem", fontWeight: "bold" }}
            className="text-blue-500 flex-grow-0"
          >
            Category:
          </p>
          <p
            className="dark:text-white text-black"
            style={{ fontSize: "0.875rem" }}
          >
            {data.category}
          </p>
        </div>
        <hr className="my-4 border-gray-400" />

        {!isAvailable && <p style={{ color: "red" }}>Item Not Available</p>}
        
        {isAvailable && (
          <>
            <div className="flex items-center gap-2 mt-4 flex-start relative flex-col md:flex-row lg:flex-row">
              <button
                className="btn bg-blue-500 text-white uppercase font-bold hover:bg-blue-700"
                onClick={openBorrowModal}
              >
                Borrow This Book
              </button>
              <div className="relative">
                <DatePicker
                  selected={returnDate}
                  onChange={(date) => modalOnChange(date)}
                  minDate={new Date()}
                  className="form-control"
                  id="returnDate"
                />
                <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500" />
              </div>
            </div>
          </>
        )}

      </div>
    </div>
  );
};

export default SingleBook;
