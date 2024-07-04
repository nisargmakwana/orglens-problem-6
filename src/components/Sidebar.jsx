import React from "react";

function Sidebar() {
	return (
		<aside className="bg-[#003566] text-white w-64 p-4">
			<nav>
				<ul>
					<li className="mb-2">
						<a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
							Home
						</a>
					</li>
					<li className="mb-2">
						<a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
							About
						</a>
					</li>
					<li className="mb-2">
						<a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
							Contact
						</a>
					</li>
					<li className="mb-2">
						<a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
							Products
						</a>
					</li>
					<li className="mb-2">
						<a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
							Insights
						</a>
					</li>
					<li className="mb-2">
						<a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
							Reports
						</a>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
