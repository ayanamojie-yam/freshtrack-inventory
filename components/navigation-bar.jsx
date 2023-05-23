import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen border-r-4 border-black ">
      <div className="px-6">
        <h2
          className="text-2xl font-extrabold text-blue-500 hover:text-pink-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          Freshtrack
        </h2>
      </div>

      <div
        className={`w-64 space-y-6 py-7 px-2 transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition duration-200 ease-in-out `}
      >
        <nav className="flex grow flex-col h-32">
          <div>
            <Link
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
            >
              <div className="flex flex-row gap-2">
                <Image
                  src="./pictures/Home.svg"
                  alt="Home"
                  width={20}
                  height={20}
                />
                <p>Dashboard</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
            >
              <div className="flex flex-row gap-2">
                <Image
                  src="./pictures/Inventory.svg"
                  alt="Home"
                  width={20}
                  height={20}
                />
                <p>Inventory</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
            >
              <div className="flex flex-row gap-2">
                <Image
                  src="./pictures/Report.svg"
                  alt="Home"
                  width={20}
                  height={20}
                />
                <p>Reports</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
            >
              <div className="flex flex-row gap-2">
                <Image
                  src="./pictures/Order.svg"
                  alt="Home"
                  width={20}
                  height={20}
                />
                <p>Orders</p>
              </div>
            </Link>
          </div>








          <div>
            <Link
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
            >
              
              <div className="flex flex-row gap-2">
                <Image
                  src="./pictures/Settings.svg"
                  alt="Home"
                  width={20}
                  height={20}
                />
                <p>Settings</p>
              </div>
            </Link>
            <Link
              href="#"
              className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
            >
              <div className="flex flex-row gap-2">
                <Image
                  src="./pictures/Log Out.svg"
                  alt="Home"
                  width={20}
                  height={20}
                />
                <p>Log Out</p>
              </div>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
