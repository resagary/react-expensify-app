import React from 'react';
import { shallow } from 'enzyme';
import { ResetPasswordPage } from '../../components/ResetPasswordPage';

test('should correctly render ResetPasswordPage', () => {
    const wrapper = shallow(<ResetPasswordPage />);
    expect(wrapper).toMatchSnapshot();
});