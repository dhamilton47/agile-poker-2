import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import SignIn from '../components/SignIn/SignIn';

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
			<div>
				<div>
					header
				</div>
			</div>
		])).to.equal(true);
    });
})