import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";

const BookList = ({ data, isBorrowed, onReturn }) => {
  return (
    <div className="room-item shadow rounded overflow-hidden h-full border border-blue-500 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">

      <div className="relative">
        <img
          className="img-fluid"
          src={
            data?.image ||
            "https://source.unsplash.com/random/900×700/?bookcover"
          }
          alt=""
          style={{ width: "100%", height: "200px", objectFit: "cover" }}
        />
        <small className="absolute start-0 top-full transform -translate-y-1/2 text-white rounded py-1 px-3 ms-4 bg-blue-500 font-bold">
          <div className="flex items-center">
            {Array.from({ length: Math.floor(data.rating) }).map(
              (_, index) => (
                <AiFillStar key={index} className="text-yellow-300" />
              )
            )}
            {Array.from({ length: 5 - Math.floor(data.rating) }).map(
              (_, index) => (
                <AiOutlineStar key={index} className="text-white" />
              )
            )}
          </div>
        </small>
      </div>

      <div className="p-4 mt-2">
        <div className="flex justify-between mb-3">
          <h5 className="mb-0 font-bold">{data?.name}</h5>
          <div className="flex items-center">
            <p>{data?.author}</p>
          </div>
        </div>

        {isBorrowed ? (
          <div className="mb-3 justify-between">
            <small className="border-end me-3 pe-3 flex items-center">
              <FaCalendarAlt className="text-blue-500 mr-2" />
              Borrowed Date: {data?.borrowedBy[1]?.borrowDate}
            </small>
            <small className="border-end me-3 pe-3 flex items-center">
              <FaClock className="text-blue-500 mr-2" />
              Return Date: {data?.borrowedBy[1]?.returnDate}
            </small>
          </div>
        ) : (
          <div className="flex mb-3 justify-between">
            <small className="border-end me-3 pe-3 flex items-center">
              <FaCalendarAlt className="text-blue-500 mr-2" />
              {data?.category}
            </small>
            <small className="border-end me-3 pe-3 flex items-center">
              <FaClock className="text-blue-500 mr-2" />
              {data?.quantity} Available
            </small>
          </div>
        )}

        <p className="text-body mb-3">
          {!isBorrowed &&(
            data?.description
          )}
        </p>
        
        {isBorrowed ? (
          <div className="flex justify-between">
            <button
              onClick={() => onReturn(data._id)}
              className="btn btn-sm btn-primary rounded py-2 px-4 bg-blue-500 border-0 outline-0 text-white hover:bg-blue-500"
            >
              Return
            </button>
          </div>
        ) : (
          <div className="flex justify-between">
            <Link
              to={`/book-details/${data._id}`}
              className="btn btn-sm btn-primary rounded py-2 px-4 bg-blue-500 border-0 outline-0 text-white hover:bg-blue-500"
              href="#"
            >
              View Detail
            </Link>
            <div className="flex items-center">
              <Link
                to={`/update-book/${data._id}`}
                className="btn btn-sm btn-primary rounded py-2 px-4 bg-blue-500 border-0 outline-0 text-white hover:bg-blue-500"
              >
                Update
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookList;
