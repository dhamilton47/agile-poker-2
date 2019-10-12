import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { render, waitForElement, cleanup } from 'react-testing-library';

//import {TableHeaderFill, TableDataFill} from '../components/TableFills/TableFills';

Enzyme.configure({ adapter: new Adapter() });

const PopulateTableRow = props => {
	return (
		<tr>
			<th className={props.ClassName}>{props.A}</th>
			<th className={props.ClassName}>{props.B}</th>
		</tr>
	);
};

afterEach(cleanup);

describe("PopulateTableRow", () => {
	it('renders without crashing', () => {
		const div = document.createElement('div');
		render(
			<table>
				<thead>
					<PopulateTableRow ClassName={"heading-md"} A={"Score"} B={"#"} />
				</thead>
			</table>, div)
	});
/*
	it('should render an empty table element', () => {
        const wrapper = shallow(<PopulateTableRow/>);
        expect(wrapper.containsAllMatchingElements([
			<table></table>
		])).to.equal(true);
	});
*/	
})