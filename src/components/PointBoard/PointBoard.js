import React, {Component} from 'react';
import './PointBoard.css';

import {ContainerHeading} from "../Util/Util";

//const buttonScores = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

class ScoreBoard extends Component {
	render() {
		return (
			<div className="app-item app-pointboard-location">
				<div className="pointboard-container">
					<div className="location-top">
						<ContainerHeading heading={"Effort Estimate"} />
					</div>

					<div className="location-middle">
						<table>
							<tbody>
							<tr>
								<td>0</td>
								<td>1</td>
								<td>2</td>
							</tr>
							<tr>
								<td>3</td>
								<td>5</td>
								<td>8</td>
							</tr>
							<tr>
								<td>13</td>
								<td>21</td>
								<td>34</td>
							</tr>
							<tr>
								<td>55</td>
								<td>89</td>
								<td>144</td>
							</tr>
							</tbody>
						</table>
					</div>

				</div>
			</div>

		);
	}
}

export default ScoreBoard;