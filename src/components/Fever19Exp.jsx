import { useState } from "react";
import { MdHexagon } from "react-icons/md";

const Fever19Exp = () => {

   const Fever19Tabs = [
  {
    id: "frontend",
    title: "Frontend Development (React.js & React Router)",
    content: (
      <ul className="flex flex-col gap-2 text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Developed responsive user interfaces using React.js for e-commerce and business websites.</li>
        <li className="flex items-center gap-2"><MdHexagon />Implemented client-side routing using React Router for seamless navigation.</li>
        <li className="flex items-center gap-2"><MdHexagon />Integrated frontend with backend APIs for dynamic data rendering and improved user experience.</li>
      </ul>
    ),
  },
  {
    id: "backend",
    title: "Backend Development (Node.js & Express.js REST APIs)",
    content: (
      <ul className="flex flex-col gap-2 text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Built scalable RESTful APIs using Node.js and Express.js for user, product, and order management.</li>
        <li className="flex items-center gap-2"><MdHexagon />Structured backend business logic with modular routing and middleware architecture.</li>
        <li className="flex items-center gap-2"><MdHexagon />Handled server-side validations, error handling, and request lifecycle management.</li>
      </ul>
    ),
  },
  {
    id: "auth",
    title: "Authentication & Security (JWT & Password Hashing)",
    content: (
      <ul className="flex flex-col gap-2 text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Implemented JWT-based authentication and authorization workflows.</li>
        <li className="flex items-center gap-2"><MdHexagon />Secured user credentials using password hashing techniques (bcrypt).</li>
        <li className="flex items-center gap-2"><MdHexagon />Protected private routes and enforced role-based access control.</li>
      </ul>
    ),
  },
  {
    id: "database",
    title: "Database Management (MongoDB & Mongoose)",
    content: (
      <ul className="flex flex-col gap-2 text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Designed and managed MongoDB databases with structured schemas using Mongoose.</li>
        <li className="flex items-center gap-2"><MdHexagon />Created optimized queries and indexing strategies for performance improvement.</li>
        <li className="flex items-center gap-2"><MdHexagon />Maintained data integrity across collections in full-stack applications.</li>
      </ul>
    ),
  },
  {
    id: "ecommerce",
    title: "E-commerce Features (Cart, Wishlist & Razorpay)",
    content: (
      <ul className="flex flex-col gap-2 text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Developed cart and wishlist functionalities integrated with MongoDB and backend APIs.</li>
        <li className="flex items-center gap-2"><MdHexagon />Integrated Razorpay payment gateway for secure online transactions.</li>
        <li className="flex items-center gap-2"><MdHexagon />Ensured end-to-end checkout workflow from frontend (React.js) to backend (Node.js).</li>
      </ul>
    ),
  },
  {
    id: "caching",
    title: "Performance Optimization (Redis & API Efficiency)",
    content: (
      <ul className="flex flex-col gap-2 text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Implemented Redis caching to improve API response times and reduce database load.</li>
        <li className="flex items-center gap-2"><MdHexagon />Optimized Express.js middleware and MongoDB queries for better scalability.</li>
        <li className="flex items-center gap-2"><MdHexagon />Enhanced overall system responsiveness for production-level applications.</li>
      </ul>
    ),
  },
  {
    id: "collaboration",
    title: "System Design & Deployment Collaboration",
    content: (
      <ul className="flex flex-col gap-2 text-md md:text-lg">
        <li className="flex items-center gap-2"><MdHexagon />Collaborated with senior developers on backend architecture and system design discussions.</li>
        <li className="flex items-center gap-2"><MdHexagon />Prepared production-ready modules before DevOps deployment workflows.</li>
        <li className="flex items-center gap-2"><MdHexagon />Worked in a team environment using Git-based version control practices.</li>
      </ul>
    ),
  },
];


const [Fever19ActiveTab, setFever19ActiveTabs] = useState('frontend')

const Fever19tabContent = Fever19Tabs.find((tab) => {
              return tab.id === Fever19ActiveTab
                  })



  return (
    <>
      <a href='https://fever19.com/' target="_blank"><img src='Fever19.jpg' className="w-40 md:w-50 mb-2" /></a>

       <span className="inline-block my-5 text-blue-400 text-xl md:text-2xl font-semibold">Full Stack Developer (MERN Stack) <br /> <span className="text-white/80">August 2024 - November 2025</span></span>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {
            Fever19Tabs.map((tab) => {
              return (
                <button key={tab.id} className={`px-2 py-3 sm:p-4 rounded-xl cursor-pointer text-sm sm:text-lg font-semibold transition-all duration-200 ease-in-out
                        ${ tab.id === Fever19ActiveTab
                            ? "bg-blue-500 text-white scale-105"
                            : "bg-white/10 hover:bg-blue-400 hover:text-white hover:scale-105"
                        }`} onClick={()=>setFever19ActiveTabs(tab.id)}>
                  {tab.title}
                </button>
              )
            })
          }
        </div>

        <div className="py-5 text-white/90">{ Fever19tabContent.content }</div>
    </>
  )
}

export default Fever19Exp
