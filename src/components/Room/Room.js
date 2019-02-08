import React, {Component} from 'react';
import './Room.css';

import {ContainerHeading} from "../Util/Util";
import {TableFillRow} from "./components/TableFills/TableFills";

class Room extends Component {

	render() {
		return (
			<div className="app-item app-room-location">
				<div className="room-container">
					<div className="location-top">
						<ContainerHeading heading={'Room:  App wireframe'} />
					</div>

					<div className="location-middle">
						<div className="Room-userList">
							<table className="Room-table">
								<thead>
								<TableFillRow ClassName={"Room-th"} A={"Players"} B={"Choice"}/>
								</thead>
								<tbody>
								<TableFillRow ClassName={"Room-td"} A={"TJ"} B={1}/>
								<TableFillRow ClassName={"Room-td"} A={"Sam"} B={"5"}/>
								<TableFillRow ClassName={"Room-td"} A={"Kim"} B={"1"}/>
								</tbody>
							</table>
						</div>

						<div className="Room-userList">
							<table className="Results-totalScoresTable">
								<thead>
								<TableFillRow ClassName={"Room-th"} A={"Observers"} B={" "}/>
								</thead>
								<tbody>
								<TableFillRow ClassName={"Room-td"} A={"Dad"} B={null}/>
								</tbody>
							</table>
						</div>
					</div>

					<div className="location-bottom">
						<button className="Room-changeNameBtn" >
							Change Your Name
						</button>

						<div className="Room-removeUserLabel">
							(Double click a username to remove from room)
						</div>
					</div>
				</div>
			</div>


		);
	}
}

export default Room;