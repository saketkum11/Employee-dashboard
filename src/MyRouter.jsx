import { Route, Routes } from "react-router-dom";
import { DashBoard, Employee, EmployeeDetails, Home } from "./server";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="employee" element={<Employee />}></Route>
          <Route path="employee/:id" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </>
  );
};
export { MyRouter };
