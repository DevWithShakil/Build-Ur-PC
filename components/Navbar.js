import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";

const Navbar = ({ logout, user, cart, open }) => {
  const [dropDown, setDropDown] = useState(false);
  return (
    <div className="container sticky top-0 bg-white z-10 shadow-lg mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
      <Link
        href={"/"}
        className="flex title-font font-medium items-center text-gray mb-4 md:mb-0"
      >
        <Image
          height={40}
          src="/logo1.png"
          alt="logo"
          width={40}
          className="scale-150"
        />
        <span className="ml-3 text-xl font-extrabold">BUILD CORNER</span>
      </Link>
      <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold">

        <Link href="/" className="mr-5 hover:text-gray-900">
          HOME
        </Link>



        <Link href="/category/Processor" className="mr-5 hover:text-gray-900">
          PROCESSOR
        </Link>
        <Link href="/category/Motherboard" className="mr-5 hover:text-gray-900">
          MOTHERBOARD
        </Link>
        <Link href={"/category/RAM"} className="mr-5 hover:text-gray-900">
          RAM
        </Link>
        <Link
          href={"/category/PowerSupply"}
          className="mr-5 hover:text-gray-900"
        >
          POWER SUPPLY
        </Link>
        <Link href={"/category/Storage"} className="mr-5 hover:text-gray-900">
          STORAGE DEVICE
        </Link>
        <Link href={"/category/Monitors"} className="mr-5 hover:text-gray-900">
          MONITOR
        </Link>
        <Link
          href={"/category/GraphicsCard"}
          className="mr-5 hover:text-gray-900"
        >
          OTHERS
        </Link>
        <Link href="/pcBuilder">
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-4">
            PC BUILDER
          </button>
        </Link>

        {/* <Link
          href={"/category/Peripherals"}
          className="mr-5 hover:text-gray-900"
        >
          Peripherals
        </Link> */}
        <div className="flex justify-center items-center space-x-3 cursor-pointer  hover:text-gray-900">
          {user.value && (
            <RxAvatar
              onMouseOver={() => setDropDown(true)}
              onMouseLeave={() => setDropDown(false)}
              className="text-3xl"
            />
          )}
          {/* <div
            className="relative flex items-center justify-center"
            onClick={open}
          >
            <AiOutlineShoppingCart className="text-3xl" />
            {Object.keys(cart).length > 0 && (
              <span
                className="
             absolute top-0 right-0 bg-red-500 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center
            "
              >
                {Object.keys(cart).length}
              </span>
            )}
          </div> */}

          {!user.value && (
            <Link href={"/Login"}>
              <button className="bg-gray-500 hover:bg-yellow-800 text-white font-bold p-2 rounded">
                Login
              </button>
            </Link>
          )}
        </div>
        {dropDown && (
          <div
            onMouseOver={() => setDropDown(true)}
            onMouseLeave={() => setDropDown(false)}
            className="absolute lg:top-10  lg:right-4 md:top-28 md:right-64 rounded-md bg-gray-100 z-10 shadow-md top-36 right-12"
          >
            <ul className="font-semibold rounded-md text-gray-900 cursor-pointer">
              <li className="p-2 font-bold border-b border-black">
                Hello, {user.name}
              </li>
              <Link href={"/MyOrders"}>
                <li className="p-2 hover:text-blue-500 border-b border-black">
                  My Orders
                </li>
              </Link>
              <Link href={"/Profile"}>
                <li className="p-2 hover:text-blue-500 border-b border-black">
                  Profile
                </li>
              </Link>
              <li onClick={logout} className="p-2 hover:text-red-600 ">
                Logout
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;



<div class="relative" data-te-dropdown-ref>
  <button
    class="flex items-center whitespace-nowrap rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
    type="button"
    id="dropdownMenuButton1tx"
    data-te-dropdown-toggle-ref
    aria-expanded="false"
    data-te-ripple-init
    data-te-ripple-color="light">
    Dropdown item text
    <span class="ml-2 w-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        class="h-5 w-5">
        <path
          fill-rule="evenodd"
          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
  </button>
  <ul
    class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
    aria-labelledby="dropdownMenuButton1tx"
    data-te-dropdown-menu-ref>
    <span
      class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 dark:text-neutral-200"
    >Dropdown item text</span
    >
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
      >Action</a
      >
    </li>
    <li>
      <a
        class="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
        href="#"
        data-te-dropdown-item-ref
      >Another action</a
      >
    </li>
  </ul>
</div>