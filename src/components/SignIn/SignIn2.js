import React, {Component} from 'react';
import './SignIn.css';

class SignIn extends Component {
	render() {
		return (
			<div className="sign-in-container">
				Sign In
				<div className="homeContainer">
					<h2>Join a Room</h2>

					<label className="Home-label">Room name</label>
					<input
						type="text"
						placeholder="Enter Room Name"
					/>

					<label className="Home-label">User name</label>
					<input
						type="text"
						placeholder="Enter Your Name"
					/>

					<label className="Home-label">User type</label>
					<select >
						<option value="player">Player</option>
						<option value="observer">Observer</option>
					</select>

					<div className="Home-joinButtonContainer">
						<button >Join</button>
					</div>
				</div>
			</div>
		);
	}
}

export default SignIn;