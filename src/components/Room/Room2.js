import React, {Component} from 'react';
import './Room.css';

import {RoomHeader} from "./components/RoomHeader/RoomHeader";

class Room extends Component {
	constructor(props) {
		super(props);

		this.state = {users: []};
	}

	/*
	async componentWillMount() {
		this.sessionName = this.props.match.params.sessionName;
		this.userName = localStorage.getItem(`${this.sessionName}_user`);
		this.userType = localStorage.getItem(`${this.sessionName}_type`);

		if (!this.userName) {
			this.props.history.replace(`/home/${this.sessionName}`);
		}

		let db = window.firebase.database().ref();
		let sessionRoom = await db.child(`rooms/${this.sessionName}`).once("value");

		// We need to create the room if it doesn't exist.
		if (!sessionRoom.exists()) {
			db
				.child("rooms")
				.child(this.sessionName)
				.set({
					scoresVisible: false
				});
		}

		this.dbSession = db.child("rooms").child(this.sessionName);

		// Add this user to the db.
		let newUser = this.dbSession.child("users").push();
		this.userKey = newUser.key;
		newUser.set({
			userName: this.userName,
			userType: this.userType,
			score: -1
		});

		// Remove this user once the browser is closed.
		let dc = this.dbSession.child("users").child(this.userKey);
		dc.onDisconnect().remove();

		// Listen for changes in this room.
		this.dbSession.on("value", this._setData);
	}

	componentWillUnmount() {
		this.dbSession.off("value", this._setData);
		this.dbSession
			.child("users")
			.child(this.userKey)
			.remove();
	}

	_removeUser = (user, e) => {
		e.preventDefault();
		let shouldRemove = window.confirm(
			`Are you sure you want to remove ${user.userName} from the room?`
		);

		if (shouldRemove) {
			this.dbSession
				.child("users")
				.child(user.id)
				.remove();
		}
	};

	_renderScore(player) {
		if (this.state.scoresVisible) {
			return <div>{player.score > -1 ? player.score : ""}</div>;
		} else {
			let classNames = ["Room-hiddenScore"];
			if (player.score !== -1) {
				classNames.push("decided");
			}
			classNames = classNames.join(" ");
			return <div className={classNames} />;
		}
	}

	_changeName = e => {
		e.preventDefault();
		localStorage.removeItem(`${this.sessionName}_user`);
		this.props.history.replace(`/home/${this.sessionName}`);
	};
*/
	render() {
		let {users} = this.state;
		let players = users.filter(user => user.userType === "player");
		let observers = users.filter(user => user.userType === "observer");

		return (
			<div className="room-container">
				Player Room
				<div className="Room-container">

					<RoomHeader room={this.sessionName} />

					<div className="Room-userContainer">

						<h3>
							Players ---{" "}
							<button className="Room-changeNameBtn" onClick={this._changeName}>
								Change Name
							</button>
						</h3>

						<ul className="Room-userList">
							{players.map(player => (
								<li
									className="Room-userListItem"
									onDoubleClick={this._removeUser.bind(this, player)}
									key={player.id}
								>
										<span className="Room-userListItemNameContainer">
											{player.userName}
										</span>
									<span className="Room-userListItemScoreContainer">
											{this._renderScore(player)}
										</span>
								</li>
							))}
						</ul>

						{observers.length ? (
							<div>
								<h3>Observers</h3>
								<ul className="Room-userList">
									{observers.map(observer => (
										<li
											className="Room-userListItem"
											onDoubleClick={this._removeUser.bind(this, observer)}
											key={observer.id}
										>
											<span>{observer.userName}</span>
										</li>
									))}
								</ul>
							</div>
						) : null}

						{observers.length || players.length ? (
							<div className="Room-removeUserLabel">
								(Double click a username to remove)
							</div>
						) : null}
					</div>
				</div>
			</div>
		);
	}
}

export default Room;