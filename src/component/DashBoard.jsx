const DashBoard = () => {
  return (
    <>
      <div>
        <div className="mt-10 mx-10 md:ml-10 max-w-2xl">
          <h2 className="text-xl">
            Welcom to Hr Management app - A User Guide
          </h2>
          <h4 className="mt-4 font-semibold">Overview</h4>
          <p className="mt-2">
            Welcome to our <strong>HR management system</strong>. It allows you
            to easily handle all aspects of the hiring process. Our platform is
            dedicated to improving productivity for HR, providing a space for
            the audience to do work efficiently.
          </p>
          <h4 className="mt-8  font-semibold">Our Mission </h4>
          <p className="mt-2">
            At HR app, our mission is to build HR SaaS products for any
            organization. We are committed to keeping track of all organization
            employees to ensure an innovative experience for our users.
          </p>
          <h4 className="mt-8  font-semibold">Objectives </h4>
          <div className="flex gap-2 mt-4 flex-wrap">
            <p className="bg-orange-500 text-white flex-1 px-2 py-2 rounded-md border-2 text-center">
              Culture Value
            </p>
            <p className="bg-purple-500 text-white flex-1 px-2 py-2 rounded-md border-2 text-center">
              Transpancy
            </p>
            <p className="bg-green-500 text-white flex-1 px-2 py-2 rounded-md border-2 text-center">
              Technology
            </p>
            <p className="bg-cyan-500 text-white flex-1 px-2 py-2 rounded-md border-2 text-center">
              Team
            </p>
          </div>
          <h4 className="mt-8  font-semibold">Audience</h4>
          <p className="mt-2">
            Our website is designed for those who have issues managing records
            of their employees, candidates, and job openings. Whether you are an
            HR professional or an employer looking to streamline your hiring
            process, our HR app provides valuable content and services tailored
            to your needs.
          </p>
          <h4 className="mt-8  font-semibold">Features</h4>
          <div className="flex gap-2 mt-4 flex-wrap">
            <p className="mt-2 border-2 border-cyan-500 p-2 rounded-md text-cyan-500">
              Track Employee
            </p>
            <p className="mt-2 border-2 border-purple-500 p-2 rounded-md text-purple-500">
              Employee Salary
            </p>
            <p className="mt-2 border-2 border-green-500 p-2 rounded-md text-green-500">
              Employee Work
            </p>
            <p className="mt-2 border-2 border-orange-500 p-2 rounded-md text-orange-500">
              Delete employee Data
            </p>
          </div>
          <h4 className="mt-8  font-semibold">How Website Works</h4>
          <p className="mt-2">
            Welcome to HR App, where we have simplified the user experience to
            make your journey seamless and enjoyable. Here is a step-by-step
            guide on how to navigate and make the most of our platform:
          </p>
          <p className="mt-2 ml-8">
            1. A dashboard to manage HR queries and notifications.
          </p>
          <p className="mt-2 ml-8">
            2. An employee management panel is designed to handle all work
            related to the organizations employees.
          </p>
          <p className="mt-2 ml-8">
            3. An candidate panel is designed to manage all tasks related to
            candidate applications.
          </p>
          <p className="mt-2 ml-8">
            4. An Job panel is designed to manage all tasks related to new
            openings.
          </p>
          <h4 className="mt-8  font-semibold">Conclusion</h4>
          <p className="my-2">
            At HR App, we are dedicated to providing a better HR experience with
            our SaaS product. Join us in achieving the greatest platform for all
            working professionals. Explore the possibilities.
          </p>
        </div>
      </div>
    </>
  );
};

export { DashBoard };
