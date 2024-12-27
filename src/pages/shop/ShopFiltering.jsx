import React from "react";
import sharedObjects from "../../common/commonData";

const ShopFiltering = ({
  filters,
  filtersState,
  setFiltersState,
  clearFilters,
}) => {
  const { category, filtersText, colorsText } = sharedObjects.shopFiltering;
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3>{filtersText}</h3>

      {/* for categories */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">{category}</h4>
        <hr />
        {filters.categories.map((category) => (
          <label key={category} className="capitalize cursor-pointer">
            <input
              type="radio"
              name="category"
              id="category"
              value={category}
              checked={filtersState.category === category}
              onChange={(e) =>
                setFiltersState({ ...filtersState, category: e.target.value })
              }
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>

      {/* for colors */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">{colorsText}</h4>
        <hr />
        {filters.colors.map((color) => (
          <label key={color} className="capitalize cursor-pointer">
            <input
              type="radio"
              name="color"
              id="color"
              value={color}
              checked={filtersState.color === color}
              onChange={(e) =>
                setFiltersState({ ...filtersState, color: e.target.value })
              }
            />
            <span className="ml-1">{color}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ShopFiltering;
