import React, {Component} from 'react';
import './Results.css';

import {ContainerHeading} from "../Util/Util";
import {TableFillRow} from "../Room/components/TableFills/TableFills";

class Results extends Component {

	render() {
		let {scoresVisible} = true;
		return (
			<div className="app-item app-results-location">
				<div className="results-container">
					<div className="location-top">
						<ContainerHeading heading={([1].length === 1 && [1][0] !== '?') ? 'Totals - Unanimous!' : 'Totals'} />
					</div>

					<div className="location-middle">
						<table className="Results-table">
							<thead>
							<TableFillRow ClassName={"Results-th"} A={"Score"} B={"#"}/>
							</thead>
							<tbody>
							<TableFillRow ClassName={"Results-td"} A={"1"} B={"1"}/>
							<TableFillRow ClassName={"Results-td"} A={"2"} B={"5"}/>
							<TableFillRow ClassName={"Results-td"} A={"3"} B={"1"}/>
							</tbody>
						</table>
					</div>

					<div className="location-bottom">
						<button
							className="Results-btn"
							onClick={null}
						>
							Clear scores
						</button>

						<button
							className="Results-btn"
							onClick={null}
						>
							{scoresVisible ? "Hide" : "Show"} scores
						</button>
					</div>

				</div>
			</div>
		);
	}
}

export default Results;