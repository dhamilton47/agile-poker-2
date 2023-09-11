import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Room from '../components/Room/Room';
import { GridSection } from '../components/Util/Util';

Enzyme.configure({ adapter: new Adapter() });

describe("Room", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Room />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('should render an empty div element', () => {
        const wrapper = shallow(<Room/>);
        expect(wrapper.containsAllMatchingElements([
			<GridSection/>
		])).to.equal(true);
	});
	
/*
	it('should acknowledge a users selection of a value', () => {

	});

	it('should update the room section when a user enters', () => {

	});

	it('should update the room section when a user exits', () => {

	});

	it('should accept user data for a room name', () => {

	}); 
*/
})