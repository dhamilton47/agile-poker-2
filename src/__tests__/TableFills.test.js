import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {TableHeaderFill, TableDataFill} from '../components/TableFills/TableFills';

Enzyme.configure({ adapter: new Adapter() });

describe("TableFills", () => {
	it('table header renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<table><thead><TableHeaderFill ClassName={"heading-md"} A={"Score"} B={"#"} /></thead></table>, div);
		ReactDOM.unmountComponentAtNode(div);
	});

	it('table row renders without crashing', () => {
		const div = document.createElement('div');
		ReactDOM.render(<table><tbody><TableDataFill ClassName='' A={"2"} B={"5"} /></tbody></table>, div);
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