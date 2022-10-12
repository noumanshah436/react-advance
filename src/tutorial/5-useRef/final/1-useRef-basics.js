import React, { useEffect, useRef } from "react";
// useRef is similar to useState but have some differences

// useRef:
// preserves value
// DOES NOT trigger re-render

// useRef mostly used to target DOM nodes/elements
// useRef can be used with any html element



const UseRefBasics = () => {

	// crearing useRef
	const refContainer = useRef(null);
	const divContainer = useRef(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(refContainer.current.value);
		console.log(divContainer.current);
	};

	useEffect(() => {
		console.log(refContainer.current);
		refContainer.current.focus();
	}); // don't worry about about dependency array because useRef dont't re-render

	return (
		<>
			<form className="form" onSubmit={handleSubmit}>
				<div>
					<input type="text" ref={refContainer} />
				</div>
				<button type="submit">submit</button>
			</form>

			<div ref={divContainer}>Hello World</div>
		</>
	);
};

export default UseRefBasics;
