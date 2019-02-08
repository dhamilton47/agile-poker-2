import React from "react";

export const ContainerHeading = props => {
	return (
		<div className="grid-container-heading">{props.heading}</div>
	);
};

export const GridLabel = props => {
	return (
		<label className="SignIn-label">{props.val}</label>
	);
};

export const GridInput = props => {
	return (
		<div>
			<GridLabel val={props.label} />
			<input
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>

	);
};
