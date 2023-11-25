import { createContext, useContext, useEffect, useState } from "react";

const EmployeeContext = createContext({});
const useEmployee = () => useContext(EmployeeContext);
// eslint-disable-next-line react/prop-types
const EmployeeProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const [employeData, setEmployeData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://dummy.restapiexample.com/api/v1/employees")
        .then((data) => data.json())
        .then((result) => {
          console.log(result);
          setData(result.data);
        })
        .catch((error) => console.error(error));
    };
    fetchData();
  }, []);

  console.log(data, employeData);
  return (
    <EmployeeContext.Provider
      value={{
        data,
        setData,
        employeData,
        setEmployeData,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
export { EmployeeProvider, useEmployee };
