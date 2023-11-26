import { Route, Routes } from "react-router-dom";
import {
  Candidates,
  DashBoard,
  Employee,
  EmployeeDetails,
  Home,
  Job,
} from "./server";

const MyRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="employee" element={<Employee />}></Route>
          <Route path="employee/:id" element={<EmployeeDetails />} />
          <Route path="candidates" element={<Candidates />} />
          <Route path="job" element={<Job />} />
        </Route>
      </Routes>
    </>
  );
};
export { MyRouter };
