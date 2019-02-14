import React, {Component} from 'react';
import './SignIn.css';

import {ContainerHeading, GridLabel, GridInput} from "../Util/Util";

class SignIn extends Component {
	render() {
		return (
			<div className="app-item-lg location-tl">

					<div className="location-t">
						<ContainerHeading heading={"Join a Room"} />
					</div>

					<div className="location-m">
						<GridInput
							label={'Room name'}
							type={'text'}
							placeholder={'Enter Room Name'}
						/>

						<GridInput
							label={'User name'}
							type={'text'}
							placeholder={'Enter Your Name'}
						/>

						<GridLabel val={'User type'} />
						<select >
							<option value="player">Player</option>
							<option value="observer">Observer</option>
						</select>
					</div>


					<div className="location-b">
						<button >Join</button>
					</div>

			</div>
		);
	}
}

export default SignIn;