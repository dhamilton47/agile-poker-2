import React from 'react';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../components/App/App';
import SignIn from '../components/SignIn/SignIn';
import PointBoard from "../components/PointBoard/PointBoard";
import Room from '../components/Room/Room';
import Results from '../components/Results/Results';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('should render SignIn, PointBoard, Room and Results', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.containsAllMatchingElements([
            <SignIn />,
            <PointBoard />,
            <Room />,
            <Results />
        ])).to.equal(true);
    });
});

