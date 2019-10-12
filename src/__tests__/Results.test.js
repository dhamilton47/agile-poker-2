import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Results from '../components/Results/Results';
import { GridSection } from '../components/Util/Util';

Enzyme.configure({ adapter: new Adapter() });

describe("PointBoard", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<Results />, div);
		ReactDOM.unmountComponentAtNode(div);
	});
	
	it('should render an empty div element', () => {
        const wrapper = shallow(<Results/>);
        expect(wrapper.containsAllMatchingElements([
			<GridSection/>
		])).to.equal(true);
    });
})