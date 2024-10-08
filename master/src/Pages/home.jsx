import { useEffect, useState } from "react"
import Button from "../components/Elements/Button"
import { Link, Outlet } from "react-router-dom"
import { useLogin } from "../hooks/useLogin"
import Navbar from "../components/Fragments/Navbar"
import darkMode from "../assets/svg/darkMode.svg"

const HomePage = () => {
    const username = useLogin()

    const handleLogin = () => {
        window.location.href= "/login"
    }

    const handleLogout = ()=> {
        localStorage.removeItem('token')
        window.location.href = '/login'
    }
    return (
        <div className="relative flex">

                <Navbar></Navbar>
{/* Side Menu */}
            {/* <div className=" sticky top-0 h-screen peer hidden md:flex  md:flex-col w-16 md:justify-between border-e bg-sky-500 max-w-min border-r-0">
                <div className="sticky top-0">

                    <div className="border-t border-gray-100">
                    <div className="px-2">
                        <div className="py-4">
                        <a
                            href="#"
                            className="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="size-5 opacity-75"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            </svg>

                            <span
                            className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                            General
                            </span>
                        </a>
                        </div>

                        <ul className="space-y-1 border-t border-gray-100 pt-4">
                        <li>
                            <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                            </svg>

                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Teams
                            </span>
                            </a>
                        </li>

                        <li>
                            <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                                />
                            </svg>

                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Billing
                            </span>
                            </a>
                        </li>

                        <li>
                            <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                />
                            </svg>

                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Invoices
                            </span>
                            </a>
                        </li>

                        <li>
                            <a
                            href="#"
                            className="group relative flex justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                            >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5 opacity-75"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                            </svg>

                            <span
                                className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                            >
                                Account
                            </span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div 
                className="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2"
                onClick={handleLogout}
                >
                    <button
                        type="submit"
                        onClick={handleLogout}
                        className="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    >
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-5 opacity-75"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                        />
                        </svg>

                        <a
                        className="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
                        >
                        Logout
                        </a>
                    </button>

                </div>
            </div> */}
{/* End Side Menu */}

{/* Hover Side Menu */}
            {/* <div className=" sticky top-0 h-screen peer-hover:flex hover:flex hidden flex-col justify-between border-e bg-sky-500 min-w-max border-l-0">
                <div className="px-4 py-6">
                    <ul className=" space-y-1">
                    <li>
                        <a
                        href="#"
                        className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                        General
                        </a>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="text-sm font-medium"> Teams </span>

                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </span>
                        </summary>

                        <ul className="mt-2 space-y-1 px-4">
                            <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Banned Users
                            </a>
                            </li>

                            <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Calendar
                            </a>
                            </li>
                        </ul>
                        </details>
                    </li>

                    <li>
                        <Link
                        to='/billings'
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                        Billing
                        </Link>
                    </li>

                    <li>
                        <a
                        href="#"
                        className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                        Invoices
                        </a>
                    </li>

                    <li>
                        <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary
                            className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            <span className="text-sm font-medium"> Account </span>

                            <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                                />
                            </svg>
                            </span>
                        </summary>

                        <ul className="mt-2 space-y-1 px-4">
                            <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Details
                            </a>
                            </li>

                            <li>
                            <a
                                href="#"
                                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                            >
                                Security
                            </a>
                            </li>

                            <li>
                            <form onSubmit={handleLogout}>
                                <button
                                type="submit"
                                className="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                                onClick={handleLogout}
                                >
                                Logout
                                </button>
                            </form>
                            </li>
                        </ul>
                        </details>
                    </li>
                    </ul>
                </div>

                <div className=" sticky inset-x-0 bottom-0 border-t border-gray-100">
                    <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="size-10 rounded-full object-cover"
                    />

                    <div>
                        <p className="text-xs">
                        <strong className="block font-medium">{username}</strong>

                        <span> {username} </span>
                        </p>
                    </div>
                    </a>
                </div>
            </div>  */}
{/* End Hover Side Menu */}

{/* Hero */}
            <div className="flex flex-col w-full">
                <header className="bg-white w-full h-max sticky top-0 shadow-md py-1 z-10">
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
                        <div className="flex h-16 items-center justify-between">
                        <div className="md:flex md:items-center md:gap-12">
                            <a className="block text-sky-600" href="#">
                            <span className="sr-only">Home</span>
                            <svg className="h-8" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                                fill="currentColor"
                                />
                            </svg>
                            </a>
                        </div>

                        <div className="hidden md:block">
                            <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm lg:text-lg px-10">
                                <li>
                                <a className="text-sky-500 transition hover:text-sky-500/75" href="#"> About </a>
                                </li>

                                <li>
                                <a className="text-sky-500 transition hover:text-sky-500/75" href="#"> Careers </a>
                                </li>

                                <li>
                                <a className="text-sky-500 transition hover:text-sky-500/75" href="#"> History </a>
                                </li>

                                <li>
                                <a className="text-sky-500 transition hover:text-sky-500/75" href="#"> Services </a>
                                </li>

                                <li>
                                <a className="text-sky-500 transition hover:text-sky-500/75" href="#"> Projects </a>
                                </li>

                                <li>
                                <a className="text-sky-500 transition hover:text-sky-500/75" href="#"> Blog </a>
                                </li>
                            </ul>
                            </nav>
                        </div>

                        <div className=" ">


                            <div className="block md:hidden">
                                <button className="rounded bg-gradient-to-r from-sky-400 to-sky-600 p-2 text-white transition hover:text-gray-600/75">
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </button>
                            </div>

                            <div className="hidden md:flex divide-x">

                                <div className="size-8 bg-gradient-to-b from-red-600 from-50% to-white to-50% rounded-full border border-gray-300 mx-3 "></div>

                                <div>
                                    <div className="size-8 bg-gradient-to-r from-sky-400 to-sky-600 rounded-full p-1 flex items-center justify-center mx-3">
                                        <img src={darkMode} alt=""  className=" size-8   rounded-full  flex items-center justify-center"/>
                                    </div>
                                </div>    

                            </div>
                        </div>
                        </div>
                    </div>
                </header>
                <Outlet></Outlet>
            </div>
{/* End Hero */}
        </div>
    )
}

export default HomePage