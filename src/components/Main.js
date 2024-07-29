import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../store/DataSlice";
import EmployeeTable from "./EmployeeTable";
import { FilterAlt } from "@mui/icons-material";
import DropDownCountry from "./dropDownCountry";
import Backdrop from "./Backdrop";

const Main = () => {
  const Data = useSelector((state) => state.data.data);
  const [filter, setFilter] = useState({ country: "", gender: "" });
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [skip, setSkip] = useState(0);
  const ContainerRef = useRef(null);
  const dispatch = useDispatch();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(process.env.REACT_APP_API_URL, {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          skip: skip,
          limit: 9,
        },
      });
      dispatch(addData([...Data, ...response.data.users]));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getCountries = () => {
    Data.forEach((element) => {
      if (!countries.includes(element.address.country)) {
        console.log(element.address.country);
        setCountries([...countries, element.address.country]);
      }
    });
  };

  useEffect(() => {
    fetchData();
    setSkip(skip + 9);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = ContainerRef.current;
      if (
        container.scrollTop + container.clientHeight + 0.5 >=
        container.scrollHeight
      ) {
        fetchData();
        getCountries();
        setSkip(skip + 9);
      }
    };

    const container = ContainerRef.current;
    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div>
      {isLoading && <Backdrop />}
      <div className="flex  items-center justify-between mb-2 sm:py-3  sm:px-8 gap-4">
        <div className="sm:mb-0 ">
          <p className="text-lg sm:text-4xl font-bold">Employees</p>
        </div>

        <div className="flex flex-row sm:gap-4 gap-2 items-center">
          <div className="hidden sm:block">
            <FilterAlt
              style={{ fontSize: 30 }}
              className="sm:fontSize-40 text-red-500"
            />
          </div>

          <DropDownCountry Countries={countries} setFilter={setFilter} />
          <select
            className="p-1 sm:p-2 border-2 border-black outline-none rounded-md w-full sm:w-auto"
            onChange={(event) => {
              setFilter({ ...filter, gender: event.target.value });
              //   setGender(event.target.value);
            }}
          >
            <option value="">Gender </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      </div>

      <div
        ref={ContainerRef}
        style={{ scrollbarWidth: 0 }}
        className="h-[81vh]  overflow-y-scroll"
      >
        <EmployeeTable
          employeeData={Data}
          country={filter.country}
          gender={filter.gender}
        />
      </div>
    </div>
  );
};

export default Main;
