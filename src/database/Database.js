export let _updateRoomVisibility = () => {
	this.dbSession.child("scoresVisible").set(!this.state.scoresVisible);
};

export let _clearAllUserScores = () => {
	let users = this.dbSession.child("users");
	this.state.users.forEach(user => {
		users
			.child(user.id)
			.child("score")
			.set(-1);
	});
};
