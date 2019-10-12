import React, {Component} from 'react';
import './SignIn.css';

import { GridSection, ContainerHeading, GridLabel, GridInput } from "../Util/Util";

class SignIn extends Component {
	render() {
		return (
			<GridSection 
				location = { 'tl' } 
				header = { 'Join a Room' } 
				content = { 
					<>
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
					</>
				}
				footer = { <button >Join</button> } 
			/>
		);
	}
}

export default SignIn;