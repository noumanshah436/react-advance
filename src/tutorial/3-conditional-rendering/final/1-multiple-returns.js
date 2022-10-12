import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users/QuincyLarson";

// Multiple Returns - Fetching Data

const MultipleReturns = () => {
	// useState
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [user, setUser] = useState("default user");

	// useEffect
	useEffect(() => {
		fetch(url)
			.then((resp) => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json();
				} else {
					setIsLoading(false);
					setIsError(true);
					throw new Error(resp.statusText);
				}
			})
			.then((user) => {
				const { login } = user; // just destructuring object
				setUser(login);
				setIsLoading(false);
			})
			.catch((error) => console.log(error));
	}, []);

	// conditional rendering

	if (isLoading) {
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		);
	}
	if (isError) {
		return (
			<div>
				<h1>Error....</h1>
			</div>
		);
	}
	// default render
	return (
		<div>
			<h1>{user}</h1>
		</div>
	);
};

export default MultipleReturns;

// the catch at the end can just handle network error, it will not catch 404 error ( user not found error)
// so you need to handle it manually by checkig the status of the response

//  to catch network error we use try catch block
//  project 2 tours
