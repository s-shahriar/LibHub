import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Banner";
import BookList from "../../Components/BookList";
import Categories from "../../Components/CategorySection";
import LibraryFeatures from "../../Components/LibraryFeatures";
import LibrarySubscription from "../../Components/LibrarySubscription";
import LoadingSpinner from "../../Components/LoadingSpinner";
import Slider from "../../Components/Slider";

const Home = () => {
  const data = useLoaderData();
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    document.title = "Home";
  }, []);

  useEffect(() => {
    if (data) {
      setIsDataLoaded(true);
    }
  }, [data]);

  return (
    <div>
      
      <Banner></Banner>
      
      <div className="my-10">
        <Slider></Slider>
      </div>

      <div className="text-center my-8">
        <h6 className="text-center uppercase text-blue-500 text-2xl font-bold">
          Latest Arrivals
        </h6>
        <h1 className="mb-5 text-5xl font-extrabold">
          Explore Our{" "}
          <span className="text-uppercase text-5xl text-blue-500">
            Latest Collection
          </span>
        </h1>
      </div>

      {isDataLoaded ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {data.map((book, idx) => (
            <BookList key={idx} data={book} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center">
          <LoadingSpinner />
        </div>
      )}

      <div className="text-center my-8">
        <h6 className="text-center uppercase text-blue-500 text-2xl font-bold">
          Library Collections
        </h6>
        <h1 className="mb-5 text-5xl font-extrabold">
          Browse Our Library{" "}
          <span className="text-uppercase text-5xl text-blue-500">
            Collection
          </span>
        </h1>

        <Categories></Categories>

      </div>

      <LibraryFeatures></LibraryFeatures>
      <LibrarySubscription></LibrarySubscription>

    </div>
  );
};

export default Home;
