import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterSort,
  filterStatus,
} from "../../Redux/Features/filter/filterSlice";
function SideBar() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.filter);
  const [all, setAll] = useState(status);
  const handlerSort = (e) => {
    dispatch(filterSort(e.target.value));
  };
  return (
    <aside>
      <div className="sidebar-items">
        <div className="sidebar-content" onChange={handlerSort}>
          <h4>Sort</h4>
          <select
            name="sort"
            id="lws-sort"
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500"
          >
            <option value="default">Default</option>
            <option value="newest">Newest</option>
            <option value="most_liked">Most Liked</option>
          </select>
        </div>
        <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            {/* <!-- handle filter on button click --> */}
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-all"
                value="All"
                className="radio"
                checked={all === "All"}
                onChange={() => {
                  setAll("All");
                  dispatch(filterStatus("All"));
                }}
              />
              <label htmlFor="lws-all">All</label>
            </div>
            <div>
              <input
                type="radio"
                name="filter"
                id="lws-saved"
                value="Saved"
                className="radio"
                checked={all === "Saved"}
                onChange={() => {
                  setAll("Saved");
                  dispatch(filterStatus("Saved"));
                }}
              />
              <label htmlFor="lws-saved">Saved</label>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
