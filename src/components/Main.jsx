import React, { useState, useEffect } from "react";

function Main() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((response) => response.json())
			.then((data) => setData(data.data));
	}, []);

	return (
		<main className="flex-1 p-4 bg-[#d9f0ff] ">
			<h2 className="text-xl mb-4">Employee Statistics Report</h2>
			<div className="overflow-x-auto">
				<table className="min-w-full bg-white border border-gray-950">
					<thead>
						<tr>
							<th className="px-4 py-2 border border-gray-950">ID</th>
							<th className="px-4 py-2 border border-gray-950">Name</th>
							<th className="px-4 py-2 border border-gray-950">Position</th>
							<th className="px-4 py-2 border border-gray-950">Salary</th>
							<th className="px-4 py-2 border border-gray-950">Start Date</th>
							<th className="px-4 py-2 border border-gray-950">Office</th>
							<th className="px-4 py-2 border border-gray-950">Extn</th>
						</tr>
					</thead>
					<tbody>
						{data.map((employee) => (
							<tr key={employee.id}>
								<td className="px-4 py-2 border border-gray-950">
									{employee.id}
								</td>
								<td className="px-4 py-2 border border-gray-950">
									{employee.name}
								</td>
								<td className="px-4 py-2 border border-gray-950">
									{employee.position}
								</td>
								<td className="px-4 py-2 border border-gray-950">
									{employee.salary}
								</td>
								<td className="px-4 py-2 border border-gray-950">
									{employee.start_date}
								</td>
								<td className="px-4 py-2 border border-gray-950">
									{employee.office}
								</td>
								<td className="px-4 py-2 border border-gray-950">
									{employee.extn}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</main>
	);
}

export default Main;
