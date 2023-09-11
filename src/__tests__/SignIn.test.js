import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from '../components/SignIn/SignIn';
import { GridSection } from '../components/Util/Util';

Enzyme.configure({ adapter: new Adapter() });

describe("SignIn", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<SignIn />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	
	it('should render a div containing a header describing the purpose of this component', () => {
        const wrapper = shallow(<SignIn/>);
        expect(wrapper.containsAllMatchingElements([
			<GridSection />
		])).to.equal(true);
	});
/*	
	it('should start with no room', () => {
		const wrapper = shallow(<SignIn/>);
		expect(wrapper.state('sessionName')).to.eql([]);
	});

	it('should start with no user', () => {
		const wrapper = shallow(<SignIn/>);
		expect(wrapper.state('userName')).to.eql([]);
	});

	it('should start with user type Player', () => {
		const wrapper = shallow(<SignIn/>);
		expect(wrapper.state('userType')).to.eql([]);
	});


	it('should accept user data for a room name', () => {
		expect(true).to.equal(true);
	});
/*
	it('should accept user data for a user name', () => {

	});

	it('should allow the user to select a user type', () => {

	});

	it('should allow access to the room when the entries are valid', () => {

	});

	it('should access the chosen room', () => {

	});

	it('should update the room section for room name and current occupents', () => {

	});

	it('should initialize the totals section', () => {

	});

	it('should update the room section when a user enters', () => {

	});

	it('should update the room section when a user exits', () => {

	});

	it('should accept user data for a room name', () => {

	});


*/	
})