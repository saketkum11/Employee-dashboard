import { useEmployee } from "../Context/EmployeeProvider";

const EmployeeDetails = () => {
  const { employeData } = useEmployee();
  const truncketLetter = (data) => {
    const arr = data.slice(0, 1);
    return arr;
  };
  console.log(employeData);
  return (
    <div className="flex flex-col justify-center items-center gap-8 border border-zinc-400 rounded-2xl my-14 mx-28 p-4">
      <div className="w-48 h-48 rounded-full bg-red-400 text-white flex justify-center text-8xl items-center">
        {truncketLetter(employeData.employee_name)}
      </div>
      <div className="flex flex-col ">
        <div className="text-center my-5">
          <p className="text-xl ">Employee Name</p>
          <span className=" text-black text-3xl font-bold ">
            {employeData.employee_name}
          </span>
        </div>
        <div className="text-center my-5">
          <p className="text-xl">Salary </p>
          <span className=" text-black text-3xl font-bold  mt-40">
            {employeData.employee_salary}
          </span>
        </div>
        <div className="text-center my-5">
          <p className="text-xl">Age </p>
          <span className="  text-black text-3xl font-bold ">
            {employeData.employee_age}
          </span>
        </div>
      </div>
    </div>
  );
};

export { EmployeeDetails };
