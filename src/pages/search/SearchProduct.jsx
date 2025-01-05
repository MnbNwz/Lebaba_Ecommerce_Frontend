import React from "react";
import { useState } from "react";
import productsData from "../../Data/products.json";
import sharedObjects from "../../common/commonData";
import Products from "../shop/Products";
const SearchProduct = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleSearch = () => {
    const query = searchQuery.toLowerCase();
    const filtered = productsData.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  };
  const { subHeader, search, searchText } = sharedObjects.categoryPage;
  console.log(search);
  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">{search}</h2>
        <p className="section__subheader">{subHeader}</p>
      </section>

      <section className="section__container">
        <div className="w-full mb-12 flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            className="search-bar w-full max-w-4xl p-2 border rounded"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Trigger search on "Enter"
            placeholder="Search for products..."
          />

          <button
            className="search-button w-full md:w-auto py-2 px-8 bg-primary text-white rounded"
            onClick={handleSearch}
          >
            {searchText}
          </button>
        </div>

        <div className="">
          <Products products={filteredProducts} />
        </div>
      </section>
    </>
  );
};

export default SearchProduct;
