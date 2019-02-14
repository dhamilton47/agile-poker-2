import React, {Component} from 'react';
import './Results.css';

import {ContainerHeading} from "../Util/Util";
import {TableHeaderFill, TableDataFill} from "../Room/components/TableFills/TableFills";

class Results extends Component {

	render() {
		let {scoresVisible} = true;
		return (
			<div className="app-item-lg location-br">

					<div className="location-t">
						<ContainerHeading heading={([1].length === 1 && [1][0] !== '?') ? 'Totals - Unanimous!' : 'Totals'} />
					</div>

					<div className="location-m">
						<table className="">
							<thead>
							<TableHeaderFill ClassName={"heading-md"} A={"Score"} B={"#"}/>
							</thead>
							<tbody>
							<TableDataFill ClassName='' A={"1"} B={"1"}/>
							<TableDataFill ClassName='' A={"2"} B={"5"}/>
							<TableDataFill ClassName='' A={"3"} B={"1"}/>
							</tbody>
						</table>
					</div>

					<div className="location-b">
						<button
							className=""
							onClick={null}
						>
							{scoresVisible ? "Hide" : "Show"} scores
						</button>

						<button
							className=""
							onClick={null}
						>
							Clear scores
						</button>
					</div>


			</div>
		);
	}
}

export default Results;