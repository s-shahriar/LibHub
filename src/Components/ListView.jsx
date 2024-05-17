import React from "react";
import { Link } from "react-router-dom";

const ListView = ({ data, isBorrowed, onReturn }) => {
  return (
    <div className="container mx-auto px-4 py-8 mb-8">
      <div className="overflow-x-auto">
        <table className="w-full table-auto border-collapse border border-gray-300 dark:bg-gradient-to-r dark:from-gray-900 dark:to-gray-700">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="py-2 px-4 border border-gray-300">Book Name</th>
              <th className="py-2 px-4 border border-gray-300">Author</th>
              <th className="py-2 px-4 border border-gray-300">
                {isBorrowed ? "Borrowed Date" : "Category"}
              </th>
              <th className="py-2 px-4 border border-gray-300">
                {isBorrowed ? "Return Date" : "Description"}
              </th>
              <th className="py-2 px-4 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((book) => (
              <tr key={book._id} className="dark:text-white">
                <td className="py-2 px-4 border border-gray-300">
                  {book.name}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {book.author}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {isBorrowed ? book?.borrowedBy[1]?.borrowDate : book.category}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {isBorrowed
                    ? book?.borrowedBy[1]?.returnDate
                    : book.description}
                </td>
                <td className="py-2 px-4 border border-gray-300">
                  {isBorrowed ? (
                    <button
                      onClick={() => onReturn(book._id, book.borrowedBy)}
                      className="btn btn-sm bg-blue-500 hover:bg-gray-800 text-white dark:text-white"
                    >
                      Return
                    </button>
                  ) : (
                    <>
                      <Link
                        to={`/update-book/${book._id}`}
                        className="btn btn-sm bg-blue-500 hover:bg-gray-800 text-white dark:text-white"
                      >
                        Update
                      </Link>
                      <Link
                        to={`/book-details/${book._id}`}
                        className="btn btn-sm bg-blue-500 hover:bg-gray-800 text-white dark:text-white ml-2"
                      >
                        View
                      </Link>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListView;
