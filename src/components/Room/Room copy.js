import React, {Component} from 'react';
import './Room.css';

import {ContainerHeading} from "../Util/Util";
import {TableHeaderFill, TableDataFill} from "../TableFills/TableFills";

class Room extends Component {

	render() {
		return (
			<div className="app-item-lg location-bl">
{// 
					<div className="location-t">
						<ContainerHeading heading={'Room:  App wireframe'} />
					</div>

					<div className="location-m">
						<div className="">
							<table className="">
								<thead>
								<TableHeaderFill ClassName={"heading-md"} A={"Players"} B={"Choice"}/>
								</thead>
								<tbody>
								<TableDataFill ClassName='' A={"TJ"} B={1}/>
								<TableDataFill ClassName='' A={"Sam"} B={"5"}/>
								<TableDataFill ClassName='' A={"Kim"} B={"1"}/>
								</tbody>
							</table>
						</div>

						<div className="">
							<table className="">
								<thead>
								<TableHeaderFill ClassName={"heading-md"} A={"Observers"} B={" "}/>
								</thead>
								<tbody>
								<TableDataFill ClassName='' A={"Dad"} B={null}/>
								</tbody>
							</table>
						</div>
					</div>

					<div className="location-b">
						<div className="remove-user-label">
							(Double click a username to remove from room)
						</div>
					</div>
//}


			</div>


		);
	}
}

export default Room;