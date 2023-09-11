import React, {Component} from 'react';
import './Results.css';

import { GridSection } from "../Util/Util";
import { TableHeaderFill, TableDataFill } from "../TableFills/TableFills";

class Results extends Component {

	render() {
		let {scoresVisible} = true;
		return (
			<GridSection
				location = { 'br' }
				header = { ([1].length === 1 && [1][0] !== '?') ? 'Totals - Unanimous!' : 'Totals'} 
				content = {
					<>
						<table className="">
							<thead>
							<TableHeaderFill ClassName='' A={"Score"} B={"#"}/>
							</thead>
							<tbody>
							<TableDataFill ClassName='' A={"1"} B={"1"}/>
							<TableDataFill ClassName='' A={"2"} B={"5"}/>
							<TableDataFill ClassName='' A={"3"} B={"1"}/>
							</tbody>
						</table>
					</>
				}
				footer = {
 					<>
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
					</>
				}
			/>
		);
	}
}

export default Results;