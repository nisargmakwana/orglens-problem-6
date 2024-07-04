import React from "react";

function Header() {
	return (
		<header className="bg-[#83c9f4] text-white p-4 flex justify-center items-center gap-[1rem] ">
			<img
				src="orglens-logo.png"
				alt=""
				className="sm:max-w-[17rem] inline-block max-w-[10rem]"
			/>
			<h1 className=" inline-block text-center sm:text-[2rem] text-[1.5rem]">
				Reveal The Real
			</h1>
		</header>
	);
}

export default Header;
