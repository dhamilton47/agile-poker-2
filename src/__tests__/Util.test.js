import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ContainerHeading, GridLabel, GridInput } from '../components/Util/Util';

Enzyme.configure({ adapter: new Adapter() });

describe("Util", () => {
	it('renders ContainerHeading without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<ContainerHeading />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders GridLabel without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<GridLabel />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('renders GridInput without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<GridInput />, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	/*
	it('should render an empty div element', () => {
        const wrapper = shallow(<Room/>);
        expect(wrapper.containsAllMatchingElements([
			<div></div>
		])).to.equal(true);
	});
	*/
})