import React, {Component} from 'react';
import './PointBoard.css';

import { GridSection } from "../Util/Util";

//const buttonScores = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

class PointBoard extends Component {
	render() {
		return (
			<GridSection
				location = { 'tr' }
				header = { 'Effort Estimate' }
				content = {
					<>
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
					</>
				}
				footer = { ' ' }
			/>
		);
	}
}

export default PointBoard;