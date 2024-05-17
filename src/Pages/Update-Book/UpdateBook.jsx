import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import LoadingSpinner from "../../Components/LoadingSpinner";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const UpdateBook = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const [data, setData] = useState([]);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const res = await axiosSecure.get(`/check-user-role?email=${user.email}`);
        setUserRole(res.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchUserRole();
  }, [axiosSecure, user?.email]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios(
        `${import.meta.env.VITE_API_URL}/book-details/${id}?email=${user?.email}`
      );
      setData(res.data);

      // Manually set form values for react hook form once data is available
      Object.keys(res.data).forEach((key) => {
        setValue(key, res.data[key]);
      });
    };

    fetchData();
  }, [user]);

  const onSubmit = async (formData) => {
    setLoading(true);
    try {
      const res = await axiosSecure.patch(
        `${import.meta.env.VITE_API_URL}/update-book/${data._id}?email=${user.email}`,
        formData
      );
      console.log("from update", res);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Success",
          text: "Book information modified successfully",
          icon: "success",
          confirmButtonText: "Continue",
        });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  if (loading) return <LoadingSpinner />;

  if (userRole === "normal") {
    return (
      <p className="container m-auto text-center my-10">
        This page is only accessible for{" "}
        <span className="bg-blue-500 p-2 rounded-lg text-white font-bold">
          Librarians
        </span>
      </p>
    );
  }

  return (
    <>
      {data && (
        <section className="p-6 bg-[#0f172b] text-grey-900">
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className="p-6 rounded-md shadow-sm bg-gray-50">
              <div className="space-y-4 m-auto mb-6">
                <p className="font-bold text-2xl text-center text-blue-500">
                  Update Book Information
                </p>
                <p className="text-lg text-center">
                  Update the book details below.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="image" className="text-sm">
                    Image (URL)
                  </label>
                  <input
                    id="image"
                    type="text"
                    placeholder="Image URL"
                    {...register("image")}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  />
                  {errors.image && (
                    <span className="text-red-500 text-sm">
                      Image URL is required
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="name" className="text-sm">
                    Name *
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                  />
                  {errors.name && (
                    <span className="text-red-500 text-sm">
                      Name is required
                    </span>
                  )}
                </div>
                <div>
                  <label htmlFor="quantity" className="text-sm">
                    Quantity *
                  </label>
                  <input
                    id="quantity"
                    type="number"
                    placeholder="Quantity"
                    {...register("quantity", { required: true })}
                    className="w-full rounded-md focus:ring focus
                    :ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                    />
                    {errors.quantity && (
                      <span className="text-red-500 text-sm">
                        Quantity is required
                      </span>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label htmlFor="category" className="text-sm">
                        Category *
                      </label>
                      <select
                        id="category"
                        {...register("category", { required: true })}
                        className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                      >
                        <option value="">Select Category</option>
                        <option value="Fantasy">Fantasy</option>
                        <option value="Romance">Romance</option>
                        <option value="Historical">Historical</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Fiction">Fiction</option>
                      </select>
                      {errors.category && (
                        <span className="text-red-500 text-sm">
                          Category is required
                        </span>
                      )}
                    </div>
                    <div className="w-1/2">
                      <label htmlFor="rating" className="text-sm">
                        Rating (1-5)
                      </label>
                      <input
                        id="rating"
                        type="number"
                        placeholder="Rating"
                        {...register("rating", {
                          required: true,
                          min: 1,
                          max: 5,
                        })}
                        className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                      />
                      {errors.rating && (
                        <span className="text-red-500 text-sm">
                          Rating must be between 1 and 5
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="author" className="text-sm">
                      Author
                    </label>
                    <input
                      id="author"
                      type="text"
                      placeholder="Author"
                      {...register("author")}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="description" className="text-sm">
                      Description
                    </label>
                    <textarea
                      id="description"
                      placeholder="Description"
                      {...register("description")}
                      className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 focus:ring-violet-600 border-gray-300 resize-none h-20"
                    ></textarea>
                  </div>
                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 uppercase font-extrabold"
                    >
                      Update Book
                    </button>
                  </div>
                </div>
              </fieldset>
            </form>
          </section>
        )}
      </>
    );
  };
  
  export default UpdateBook;
  