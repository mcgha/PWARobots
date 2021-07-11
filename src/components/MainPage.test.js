import { shallow } from 'enzyme';
import React from 'react';
import MainPage from './MainPage';

let wrapper;
//runs before each test
beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }
    wrapper = shallow(<MainPage { ...mockProps }/>)
})

it('render MainPage without crashing', () => {
    expect(wrapper).toMatchSnapshot(); 
})

it('filters robots correctly', () => {
    expect(wrapper.instance().filterRobots([])).toEqual([]);
    const mockProps2 = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 3, 
            name: 'John', 
            email: 'john@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapper2 = shallow(<MainPage { ...mockProps2 }/>)
    expect(wrapper2.instance().filterRobots()).toEqual([]);
})