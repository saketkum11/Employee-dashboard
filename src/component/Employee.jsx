import { useState } from "react";
import { useEmployee } from "../Context/EmployeeProvider";
import { EmpolyeeCard } from "./EmpolyeeCard";

const Employee = () => {
  const { data, setData } = useEmployee();
  const [searchData, setSearchData] = useState("");
  const handleChange = (e) => {
    setSearchData(e.target.value);
  };
  const handleSearch = (search) => {
    const filterData = [...data].filter((item) => item.id === Number(search));
    setData(filterData);
  };
  return (
    <>
      <div className=" mt-8">
        <div className="flex justify-center">
          <section className="flex justify-between">
            <div className="flex justify-between gap-4">
              <input
                type="text"
                className="bg-gray-500 rounded-2xl placeholder:pl-4 placeholder:text-white text-white px-4 py-2  "
                placeholder="search..."
                onChange={(e) => handleChange(e)}
              />

              <button
                className="bg-yellow-500 text-white px-2 py-2 text-sm rounded-lg"
                onClick={() => {
                  handleSearch(searchData);
                }}
              >
                Search Employee
              </button>
            </div>
          </section>
        </div>
        <div
          className="my-8 flex flex-wrap gap-4 justify-center
        "
        >
          {data?.map((employee) => {
            return (
              <>
                <EmpolyeeCard employee={employee} key={`${employee.id}`} />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export { Employee };
