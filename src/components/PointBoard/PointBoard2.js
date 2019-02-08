import React, {Component} from 'react';
import './PointBoard.css';

const buttonScores = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

class ScoreBoard extends Component {
	constructor(props) {
		super(props);
		// Create functions for each of our buttons here so we only have to create them once
		// and not every time the component is rendered.
		buttonScores.forEach(score => {
			this[`button${score}`] = this._selectButton.bind(this, score);
		});
	}

	_renderPointButtons() {
		return buttonScores.map(score => (
			<button
				key={score}
				className="PointBoard-pointButton"
				onClick={this[`button${score}`]}
			>
				{score}
			</button>
		));
	}

	// /* Action handlers -----------------------------*/

	_selectButton(score) {
//		if (!this.state.scoresVisible) {
			this.dbSession
				.child("users")
				.child(this.userKey)
				.child("score")
				.set(score);
//		}
	}

	render() {
		return (
			<div className="PointBoard-container">
				Point Board<br />
				{this._renderPointButtons()}
			</div>
		);
	}
}

export default ScoreBoard;