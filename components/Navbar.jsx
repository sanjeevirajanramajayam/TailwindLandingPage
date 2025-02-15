import React from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    }

	return (
		<nav className="sticky top-0 py-3 z-50 backdrop-blur-lg border-b border-neutral-700/80 ">
			<div className="container px-4 relative mx-auto lg:text-sm">
				<div className="flex items-center justify-between">
					<div className="flex items-center flex-shrink-0 ">
						{" "}
						{/*makes the elements in this class not shrink when screen size is reduced */}
						{/* This means that the logo won't shrink if the screen size is reduced. */}
						<img className="h-10 w-10 mr-2" src={logo}></img>
						<span className="text-xl tracking-tight">InnoVex</span>
					</div>
					<ul className="hidden lg:flex ml-14 space-x-12 items-center">
						{navItems.map((item, index) => (
							<li key={index}>
								<a href={item.href}>{item.label}</a>
							</li>
						))}
					</ul>
					<div className="hidden lg:flex justify-center space-x-12 items-center">
						<a href="#" className="py-2 px-3 border rounded-md">
							Sign In
						</a>
						<a href="#" className="rounded-md py-2 px-3 bg-gradient-to-l from-orange-800 to-orange-400">
							Create an account
						</a>
					</div>
                    <div className="lg:hidden md:flex flex-col justify-end items-center">
                        <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
                    </div>
				</div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 w-full p-12 flex bg-neutral-900 flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex space-x-6">
                            <a href="#" className="py-2 px-3 border rounded-md">
                                Sign In
                            </a>
                            <a href="#" className="py-2 px-3  rounded-md bg-gradient-to-l from-orange-800 to-orange-400">
                                Create an Account
                            </a>
                        </div>
                    </div>
                )}
			</div>
		</nav>
	);
}
