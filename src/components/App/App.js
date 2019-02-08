import React, { Component } from 'react';
import './App.css';

import SignIn from "../SignIn/SignIn";
import PointBoard from "../PointBoard/PointBoard";
import Room from "../Room/Room";
import Results from "../Results/Results";

class App extends Component {

	render() {
		return (
			<div className="app-container">
				<SignIn />
				<PointBoard />
				<Room />
				<Results />
			</div>
		);
	}

	// /* Action handlers -----------------------------*/

	_setData = snapshot => {
		let newState = snapshot.val();
		newState.users = this._prepareUserData(newState.users);
		this.setState(state => newState);
	};

	_prepareUserData(users) {
		let newUsers = [];
		if (users) {
			Object.keys(users).forEach(key => {
				let userObj = users[key];
				userObj.id = key;
				newUsers.push(userObj);
			});
		}
		return newUsers;
	}
}

export default App;
