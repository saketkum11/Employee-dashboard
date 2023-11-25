import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-6 p-6 border-b border-slate-700">
        <h1 className="text-yellow-500 text-2xl font-bold">HR App</h1>
        <div className="flex gap-2 justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-yellow-500 border-2 border-white text-white flex justify-center items-center">
            R
          </div>
          <span className="text-white">Rohit Admit</span>
        </div>
      </div>
      <nav className="">
        <ul>
          <li className="hover:bg-yellow-500">
            <Link
              to="dashboard"
              className="
      text-white
      flex
      items-center
      gap-4
      p-6
      border-b border-slate-700
    "
            >
              <svg
                fill="#f5f5f5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                id="dashboard"
                className="icon glyph w-8 h-8"
                stroke="#f5f5f5"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <rect x="2" y="2" width="9" height="11" rx="2"></rect>
                  <rect x="13" y="2" width="9" height="7" rx="2"></rect>
                  <rect x="2" y="15" width="9" height="7" rx="2"></rect>
                  <rect x="13" y="11" width="9" height="11" rx="2"></rect>
                </g>
              </svg>
              <span className="text-base">Dashboard</span>
            </Link>
          </li>
          <li className="hover:bg-yellow-500">
            <Link
              to="/"
              className="
      text-white
      flex
      items-center
      gap-4
      p-6
      border-b border-slate-700
    "
            >
              <svg
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 196.925 196.925"
                fill="#ffffff"
                stroke="#ffffff"
                className="h-8 w-8"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path d="M129.941,150.887c-11.361-5.836-23.145-10.663-35.055-15.239c-0.883-0.34-1.945-1.002-2.309-1.802 c-0.967-2.136-1.641-4.415-2.339-6.677c-0.436-1.438-0.835-2.792-2.405-3.479c-0.418-0.179-0.817-1.02-0.806-1.545 c0.084-5.233-1.122-10.722,2.745-15.281c0.125-0.137,0.167-0.352,0.251-0.513c2.088-4.583,2.464-9.804,5.382-14.064 c0.072-0.095,0.095-0.239,0.101-0.37c0.346-3.246,0.692-6.486,0.967-9.738c0.03-0.406-0.328-1.122-0.668-1.241 c-1.617-0.579-1.522-1.862-1.516-3.162c0.012-6.349,0-12.698-0.006-19.04c-0.006-3.688-1.092-6.969-3.873-9.481 c-3.174-2.858-6.438-5.615-9.696-8.377c-1.575-1.331-1.718-2.357-0.245-3.825c0.65-0.644,1.492-1.11,2.25-1.659 c-0.161-0.251-0.328-0.495-0.489-0.74c-0.985,0-1.993-0.131-2.954,0.018c-3.604,0.585-7.22,1.092-10.776,1.927 c-6.76,1.599-13.33,3.711-18.82,8.24c-3.777,3.103-6.772,6.707-7.136,11.814c-0.191,2.667-0.167,5.358-0.191,8.037 c-0.024,4.356,0.036,8.724-0.054,13.079c-0.018,0.71-0.424,1.874-0.901,2.035c-1.772,0.573-1.82,1.701-1.581,3.174 c0.161,1.002,0.03,2.065,0.257,3.049c0.615,2.733,1.259,5.454,2.047,8.139c0.591,1.999,1.724,3.89,2.041,5.919 c0.627,4.057,2.124,7.59,4.863,10.657c0.453,0.507,0.8,1.366,0.746,2.023c-0.203,3.127-0.531,6.259-0.949,9.356 c-0.084,0.603-0.722,1.504-1.247,1.617c-2.076,0.43-2.399,2.041-2.888,3.646c-0.65,2.136-1.354,4.266-2.172,6.337 c-0.263,0.633-0.901,1.313-1.539,1.593c-3.693,1.617-7.453,3.091-11.17,4.648c-3.956,1.659-7.954,3.252-11.814,5.096 c-3.986,1.897-7.84,4.046-11.743,6.134c-2.291,1.229-4.439,2.59-6.247,4.278v6.838c45.283,0,90.565,0,135.836,0v-7.124 C134.171,153.489,132.202,152.045,129.941,150.887z"></path>
                      <path d="M181.661,144.777c-5.436-2.011-10.782-4.332-16.063-6.731c-1.504-0.686-2.613-2.19-3.986-3.234 c-0.603-0.459-1.325-0.883-2.047-0.996c-2.452-0.388-3.544-1.259-4.111-3.682c-0.77-3.174-1.313-6.337-0.638-9.648 c0.286-1.438,0.811-2.363,2.214-2.906c2.9-1.134,5.77-2.399,8.646-3.616c2.142-0.907,2.285-1.665,1.504-3.89 c-2.482-7.017-4.32-14.141-4.917-21.63c-0.37-4.732-0.257-9.571-1.396-14.225h-0.179c-0.107-0.43-0.149-0.865-0.269-1.289 c-2.082-8.198-10.884-12.656-18.271-13.121c-0.066-0.006-0.125-0.018-0.179-0.024c-0.567-0.03-1.11,0.048-1.653,0.084 c-3.115,0.43-5.663,2.399-8.622,3.264c-3.855,1.134-6.206,4.672-7.655,8.491c-2.041,5.418-1.659,11.2-2.112,16.815 c-0.615,7.494-2.446,14.625-4.917,21.63c-0.782,2.226-0.644,2.983,1.504,3.89c2.87,1.223,5.74,2.482,8.646,3.616 c1.396,0.549,1.921,1.462,2.214,2.906c0.656,3.312,0.125,6.468-0.638,9.648c-0.585,2.423-1.665,3.294-4.117,3.682 c-0.716,0.113-1.45,0.543-2.047,0.996c-1.366,1.044-2.482,2.548-3.986,3.234c-0.627,0.286-1.277,0.555-1.897,0.841 c5.149,2.25,10.406,4.666,15.663,7.357c2.775,1.432,5.209,3.216,7.25,5.316l1.468,1.522v9.249c0.334,0,0.644,0,0.979,0 c0.036,0,0.084,0,0.125,0c18.259,0,36.493,0,54.752,0C195.54,153.232,190.021,147.856,181.661,144.777z"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <span className="text-base">Candidates</span>
            </Link>
          </li>
          <li className="hover:bg-yellow-500">
            <Link
              to="/"
              className="
      text-white
      flex
      items-center
      gap-4
      p-6
      border-b border-slate-700
    "
            >
              <svg
                fill="#ffffff"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#ffffff"
                className="icon glyph w-8 h-8"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <circle cx="46.3" cy="36.3" r="16"></circle>
                  <path d="M66.6,51.1A11.39,11.39,0,0,0,55.2,62.5c0,7.7,8.1,15,10.6,16.9a1.09,1.09,0,0,0,1.5,0c2.5-2,10.6-9.2,10.6-16.9A11.25,11.25,0,0,0,66.6,51.1Zm0,16a4.7,4.7,0,1,1,4.7-4.7A4.76,4.76,0,0,1,66.6,67.1Z"></path>
                  <path d="M50.4,79.7h1.4c5.2-.5,2.4-3.7,2.4-3.7h0c-3.2-4.6-5-9.1-5-13.5a13.74,13.74,0,0,1,.6-4.2c.2-2-.6-2.5-1-2.7h-.2a18.48,18.48,0,0,0-2.4-.1,24.26,24.26,0,0,0-24,20.9c0,1.2.4,3.5,4.2,3.5H50.2C50.2,79.7,50.3,79.7,50.4,79.7Z"></path>
                </g>
              </svg>

              <span className="text-base">Jobs</span>
            </Link>
          </li>
          <li className="hover:bg-yellow-500">
            <Link
              to="/employee"
              className="
      text-white
      flex
      items-center
      gap-4
      p-6
      border-b border-slate-700
    "
            >
              <svg
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                className="icon glyph w-8 h-8"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="m 8 1 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m -1.5 7 c -2.492188 0 -4.5 2.007812 -4.5 4.5 v 0.5 c 0 1.109375 0.890625 2 2 2 h 8 c 1.109375 0 2 -0.890625 2 -2 v -0.5 c 0 -2.492188 -2.007812 -4.5 -4.5 -4.5 z m 0 0"
                    fill="#ffffff"
                  ></path>
                </g>
              </svg>
              <span className="text-base">Employee Management</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export { SideNav };
