import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Room from '../components/Room/Room';

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
			<div></div>
		])).to.equal(true);
    });
})