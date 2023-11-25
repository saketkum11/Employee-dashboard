import { Outlet } from "react-router-dom";
import { SideNav } from "../server";

const Home = () => {
  return (
    <>
      <main className=" grid grid-cols-12 gap-4 ">
        <header className="col-span-3 bg-slate-800 h-screen rounded-sm sticky top-0 ">
          <div className=" ">
            <SideNav />
          </div>
        </header>

        <aside className="col-span-9 ">
          <Outlet />
        </aside>
      </main>
    </>
  );
};
export { Home };
