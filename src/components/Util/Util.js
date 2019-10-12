import React from "react";

export const AppItem = props => {
	return (
		<div  className="app-item-lg location-tl">
			<div className={ "app-item-lg location-" + props.location }>
				<div className="location-t">
					<ContainerHeading heading = { props.header } />
				</div>

				<div className="location-m">
					{ props.content }
				</div>
				
				<div className="location-b">
					{ props.footer }
				</div>
			</div>			
		</div>
	);
};

export const GridSection = props => {
	return (
		<div className={ "app-item-lg location-" + props.location }>
			<div className="location-t">
				<ContainerHeading heading = { props.header } />
			</div>

			<div className="location-m">
				{ props.content }
			</div>
			
			<div className="location-b">
				{ props.footer }
			</div>
		</div>
	);
};

export const ContainerHeading = props => {
	return (
		<div className="heading-lg">{props.heading}</div>
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
