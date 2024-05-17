import { Dropdown } from "flowbite-react";
import React, { useEffect, useState } from "react";
import BookList from "../../Components/BookList";
import ListView from "../../Components/ListView";
import LoadingSpinner from "../../Components/LoadingSpinner";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AllBooks = () => {
  const {user} = useAuth();
  const [data,setData] = useState([])
  const axiosSecure = useAxiosSecure();
  const [sortBy, setSortBy] = useState("default");
  const [showAvailableBooks, setShowAvailableBooks] = useState(false);
  const [viewType, setViewType] = useState("Card View");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    document.title = "Books List";
  }, [data]);

  const fetchData = async () => {
    try {
      const res = await axiosSecure(`${import.meta.env.VITE_API_URL}/all-book?email=${user?.email}`, {
        params: { limit: 'all' }
      });
      setData(res.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  const filterData = () => {
    if (!showAvailableBooks) return data;
    return data.filter((book) => book.quantity > 0);
  };

  const sortData = (data) => {
    if (sortBy === "default") {
      return data;
    } else if (sortBy === "quantity") {
      return [...data].sort((a, b) => b.quantity - a.quantity);
    }
  };

  const filteredData = filterData();
  const sortedData = sortData(filteredData);

  if (loading) return <LoadingSpinner />;

  return (
    <>
      <div className="text-center my-8">
        <h6 className="text-center uppercase text-blue-500 text-2xl font-bold">
          Available Books
        </h6>
        <h1 className="mb-5 text-5xl font-extrabold">
          Explore Our {" "}
          <span className="text-uppercase text-5xl text-blue-500">
            Book Collection
          </span>
        </h1>
      </div>

      <div className="flex justify-center mb-5 space-x-4">

        <div className="relative bg-[#0f172b] rounded-lg">
          <Dropdown label={`Sort By: ${sortBy === "default" ? "Default" : "Quantity"}`} dismissOnClick={false}>
            <Dropdown.Item className="dark:hover:bg-[#0f172b] text-black dark:text-white" onClick={() => { setSortBy("default"); setShowAvailableBooks(false) }}>
              All Books
            </Dropdown.Item>
            <Dropdown.Item className="dark:hover:bg-[#0f172b] text-black dark:text-white" onClick={() => { setSortBy("quantity"); setShowAvailableBooks(true) }}>
              Available Books
            </Dropdown.Item>
          </Dropdown>
        </div>

        <div className="relative bg-[#0f172b] rounded-lg">
          <Dropdown label={`Toggle View: ${viewType}`} dismissOnClick={false}>
            <Dropdown.Item className="dark:hover:bg-[#0f172b] text-black dark:text-white" onClick={() => setViewType("Card View")}>
              Card View
            </Dropdown.Item>
            <Dropdown.Item className="dark:hover:bg-[#0f172b] text-black dark:text-white" onClick={() => setViewType("List View")}>
              List View
            </Dropdown.Item>
          </Dropdown>
        </div>
        
      </div>

      <div className="text-center mb-5">
        <p className="text-xl font-bold text-black-600">Total Books in the Library: {data.length}</p>
      </div>

      {viewType === "Card View" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {sortedData.map((book, idx) => (
            <BookList key={idx} data={book} />
          ))}
        </div>
      ) : (
        <ListView data={sortedData}/>
      )}
    </>
  );
};

export default AllBooks;
