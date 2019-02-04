import React from 'react';
import { shallow } from 'enzyme';
import { SignUpPage } from '../../components/SignUpPage';

let startSignUpUser, wrapper;

beforeEach(() => {
    //startSignUpUser = jest.fn();
    wrapper = shallow(
        <SignUpPage 
          //startSignUpUser={startSignUpUser}
        />
    );
});

test('should correctly render SignUpPage', () => {
    expect(wrapper).toMatchSnapshot();
});

// test('should handle startSignUpUser on form submit', () => {
//     const email = 'testing1@yahoo.com';
//     const password = '9876zyx';
//     wrapper.find('#signUpForm').prop('onSubmit')(email, password);
//     expect(startSignUpUser).toHaveBeenCalledWith(email, password);
// });