import React from "react";

const DropDownCountry = ({ Countries, setFilter }) => {
  console.log(Countries);
  return (
    <div className="">
      <select
        className=" border-2 border-black outline-none rounded-md p-1 sm:p-2 "
        onChange={(e) => {
          setFilter((prev) => ({ ...prev, country: e.target.value }));
        }}
      >
        <option text-wrap value="">
          Country
        </option>
        {Countries.map((country) => {
          return (
            <option className="font-semibold" key={country} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default DropDownCountry;
