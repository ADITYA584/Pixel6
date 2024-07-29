import React, { useState } from "react";
import { KeyboardReturn, SwapVert } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { asc, dsc, nameSort } from "../store/DataSlice";

const EmployeeTable = ({ employeeData, country, gender }) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState(false);
  const [name, setNameSort] = useState(false);

  return (
    <div className="overflow-x-auto  border-2">
      <table className="min-w-full w-full relative">
        <thead className=" bg-white shadow-md  z-10">
          <tr>
            <th
              onClick={() => {
                if (!sort) {
                  dispatch(dsc());
                  setSort(true);
                } else {
                  dispatch(asc());
                  setSort(false);
                }
              }}
              className="p-2 hover:cursor-pointer text-nowrap  text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Id <SwapVert />
            </th>
            <th className=" p-2 text-sm sm:text-base md:text-lg lg:text-xl">
              Image
            </th>
            <th
              onClick={() => {
                if (!name) {
                  dispatch(nameSort({ type: "alphabetical" }));
                  setNameSort(true);
                } else {
                  dispatch(nameSort({ type: "reverse" }));
                  setNameSort(false);
                }
              }}
              className=" p-2 hover:cursor-pointer text-start text-sm sm:text-base md:text-lg lg:text-xl"
            >
              Full Name <SwapVert />
            </th>
            <th className=" p-2 text-start text-sm sm:text-base md:text-lg lg:text-xl">
              Demography
            </th>
            <th className=" p-2 text-start text-sm sm:text-base md:text-lg lg:text-xl">
              Designation
            </th>
            <th className=" p-2 text-start text-sm sm:text-base md:text-lg lg:text-xl">
              Location
            </th>
          </tr>
        </thead>
        <tbody>
          {employeeData
            .filter((employee) => {
              if (country === "") return true;
              return employee.address.country === country;
            })
            .filter((employee) => {
              if (gender === "") return true;
              return employee.gender === gender;
            })
            .map((employee, i) => {
              return (
                <tr key={i}>
                  <td className="border-b-2 p-2 text-center text-sm sm:text-base">
                    {employee.id}
                  </td>
                  <td className="border-b-2 p-2 text-center">
                    <div className="flex justify-center items-center py-2">
                      <img
                        className="border-2 border-slate-400 border-opacity-40 shadow-sm"
                        width={50}
                        src={employee.image}
                        alt=""
                      />
                    </div>
                  </td>
                  <td className="border-b-2 text-nowrap  p-2 text-sm sm:text-base">
                    {employee.firstName +
                      " " +
                      `${employee.maidenName + " "}` +
                      employee.lastName}
                  </td>
                  <td className="border-b-2 p-2 text-sm sm:text-base">
                    {employee.gender[0].toUpperCase() + "/" + employee.age}
                  </td>
                  <td className="border-b-2 p-2 text-sm sm:text-base">
                    {employee.company.title}
                  </td>
                  <td className="border-b-2 p-2 text-sm sm:text-base">
                    <span className="text-nowrap">
                      {employee.address.state + ","}
                    </span>{" "}
                    <span className="text-nowrap">
                      {employee.address.country}
                    </span>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
