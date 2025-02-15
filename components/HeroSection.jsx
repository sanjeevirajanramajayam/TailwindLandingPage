import React from "react";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export default function HeroSection() {
	return (
		<div className="flex flex-col items-center mt-6 lg:mt-20">
			<h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
				Innovate freely <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">with InnoVex!</span>
			</h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
                Empower yourself with InnoVex.
            </p>
			<div className="flex justify-center my-10">
				<a className="py-3 px-2 mx-3 border rounded-md">Start for free</a>
				<a className="py-3 px-2 mx-3 rounded-md bg-gradient-to-r from-orange-500 to-red-800">Documentation</a>
			</div>
			<div className="flex mt-10 justify-center">
				<video autoPlay loop className="rounded-lg w-1/2 border border-amber-600 mx-2 my-4">
				<source src={video1}></source>
				</video>
				<video autoPlay loop className="rounded-lg w-1/2 border border-amber-600 mx-2 my-4">
				<source src={video2}></source>
				</video>
			</div>	
		</div>
	);
}
