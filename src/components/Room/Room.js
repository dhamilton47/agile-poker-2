import React, {Component} from 'react';
import './Room.css';

import { GridSection } from "../Util/Util";
import { TableHeaderFill, TableDataFill } from "../TableFills/TableFills";

class Room extends Component {

	render() {
		return (
			<GridSection 
				location = { 'bl' } 
				header = { 'Room:  App wireframe' } 
				content = { 
					<>
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
					</>
				}
				footer = { 	
					<div className="remove-user-label">
						(Double click a username to remove from room)
					</div> 
				} 
			/>
		);
	}
}

export default Room;