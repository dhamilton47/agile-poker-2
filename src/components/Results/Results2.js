import React, {Component} from 'react';
import './Results.css';

import ScoresTable from "./components/ScoresTable/ScoresTable";
import {ScoresTableHeader} from "./components/ScoresTable/ScoresTable";
import {_clearAllUserScores, _updateRoomVisibility} from '../../database/Database.js';

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = {scoresVisible: false};
	}

	_calculateTotals = () => {
	/*
		let totals = {};
		let players = this.state.users.filter(user => user.userType === "player");
		players.forEach(player => {
			let score = player.score;
			if (score === -1) {
				score = "?";
			}
			let scoresTotal = totals[score];
			if (scoresTotal) {
				totals[score] += 1;
			} else {
				totals[score] = 1;
			}
		});
		return totals;
		*/
		return null;
	};

	_renderScoreTotals() {

		let totals = this._calculateTotals();
		/*
		let totalsArray = Object.keys(totals).sort((a, b) => a - b);
		if (this.state.scoresVisible) {
			return (
				<div className="Room-totalsContainer">
					<ScoresTableHeader totalsArray={totalsArray} />
					<ScoresTable totals={totals} totalsArray={totalsArray} />
				</div>
			);
		} else {
			return null;
		}
*/
	}

	render() {
		let {scoresVisible} = this.state;
		return (
			<div className="results-container">
				Results
				<div className="Room-scoresContainer">
					{this._renderScoreTotals()}

					<button
						className="Room-scoresActionBtn"
						onClick={_clearAllUserScores}
					>
						Clear scores
					</button>

					<button
						className="Room-scoresActionBtn"
						onClick={_updateRoomVisibility}
					>
						{scoresVisible ? "Hide" : "Show"} scores
					</button>
				</div>
			</div>
		);
	}
}

export default Results;