import { Link } from "react-router-dom";
import { useEmployee } from "../Context/EmployeeProvider";

/* eslint-disable react/prop-types */
const EmpolyeeCard = ({ employee }) => {
  const { employee_age, employee_name, employee_salary } = employee;
  const { setEmployeData, data, setData } = useEmployee();

  const handleClick = (data) => {
    setEmployeData(data);
  };
  const handleDelete = (e, id) => {
    e.stopPropagation();
    e.preventDefault();
    const newFilter = data.filter((item) => item.id !== id);
    setData(newFilter);
  };

  return (
    <Link
      to={`${employee.employee_name}`}
      onClick={() => {
        handleClick(employee);
      }}
      className="basis-80"
    >
      <div className="border-2 border-slate-700 text-black  rounded-lg  p-4 ">
        <div>
          <span>{employee_name}</span>
          <p>Salary {employee_salary}</p>
          <p>Age {employee_age}</p>
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <button
            className="bg-slate-800 text-white px-2 py-1 rounded-md "
            onClick={(e) => {
              handleDelete(e, employee.id);
            }}
          >
            Delete
          </button>
          <button className="border-2 border-slate-800 px-2 py-1 rounded-md">
            Edit
          </button>
        </div>
      </div>
    </Link>
  );
};

export { EmpolyeeCard };
