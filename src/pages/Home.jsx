import { Outlet } from "react-router-dom";
import { SideNav } from "../server";
import { useEmployee } from "../Context/EmployeeProvider";
import { Navigation } from "../component/Navigation";

const Home = () => {
  const { toggle, setToggle } = useEmployee();
  return (
    <>
      <main className=" md:grid md:grid-cols-12 gap-4 ">
        <header className="hidden md:block md:col-span-3 bg-slate-800 h-screen rounded-sm sticky top-0 ">
          <div className=" ">
            <SideNav />
          </div>
        </header>

        <aside className="mx-auto md:col-span-9 ">
          <div className="relative flex justify-between mx-16 mt-8 p-4 rounded-lg bg-slate-500 text-white md:hidden">
            <h1 className="font-bold text-3xl">Hr App</h1>
            <button
              className="ml-8 "
              onClick={() => {
                setToggle((flag) => !flag);
              }}
            >
              <svg
                className="w-8 h-8"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 7L4 7"
                    stroke="#fafafa"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M20 12L4 12"
                    stroke="#fafafa"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                  <path
                    d="M20 17L4 17"
                    stroke="#fafafa"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            {toggle && <Navigation />}
          </div>

          <Outlet />
        </aside>
      </main>
    </>
  );
};
export { Home };
