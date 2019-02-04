import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

let startGoogleLogin, startEmailLogin, wrapper;

beforeEach(() => {
    startGoogleLogin = jest.fn();
    //startEmailLogin = jest.fn();
    wrapper = shallow(
        <LoginPage 
          startGoogleLogin={startGoogleLogin} 
          //startEmailLogin={startEmailLogin} 
        />
    );
});

test('should correctly render LoginPage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle startGoogleLogin on button click', () => {
    wrapper.find('#googleLogin').simulate('click');
    expect(startGoogleLogin).toHaveBeenCalled();
});

// test('should handle startEmailLogin on form submit', () => {
//     const email = 'testing1@yahoo.com';
//     const password = '9876zyx';
//     wrapper.find('#emailLogin').prop('onSubmit')(email, password);
//     expect(startEmailLogin).toHaveBeenLastCalledWith(email, password);
// });