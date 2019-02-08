import React from "react";

const ScoresTable = props => {
	return (
		<table className="Room-totalScoresTable">
			<thead>
				<tr className="Room-totalScoresTableHead">
					<td>Score</td>
					<td>#</td>
				</tr>
			</thead>
			<tbody>
				{props.totalsArray.map(total => (
					<tr key={total}>
						<td className="Room-totalScoresTableData">{total}</td>
						<td className="Room-totalScoresTableData">{props.totals[total]}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default ScoresTable;