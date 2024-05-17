import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../../Components/LoadingSpinner";
import SingleBook from "../../Components/SingleBook";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const BookDetails = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axiosSecure(
        `${import.meta.env.VITE_API_URL}/book-details/${id}?email=${user.email}`
      );
      setData(res.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    document.title = `${data.name} - ${data.category}`;
  }, [data]);

  const handleBookBorrowed = (updatedData) => {
    setData(updatedData);
  };

  if (loading) return <LoadingSpinner />;

  return <SingleBook data={data} onBookBorrowed={handleBookBorrowed} />;
};

export default BookDetails;
