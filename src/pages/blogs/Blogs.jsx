import React from "react";
import { sharedObjects } from "../../common/commonData";
import blogsData from "../../../src/Data/blogs.json";

const Blogs = () => {
  const { WardRobe, latestText } = sharedObjects;

  return (
    <section className="section__container blog__container">
      <h2 className="section__header">{latestText}</h2>
      <p className="section__subheader">{WardRobe}</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
        {blogsData.map((blogs, index) => (
          <div
            key={index}
            className="blog__card cursor-pointer hover:scale-105 transition-all duration-300"
          >
            <img src={blogs.imageUrl} alt="blogs" />
            <div className="blog__card__content">
              <h6>{blogs.subtitle}</h6>
              <h4>{blogs.title}</h4>
              <p>{blogs.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
