import React from 'react';
import { shallow } from 'enzyme';
import {ButtonsComponent} from '../Components/Buttons';


describe('TodoComponent', () =>{

  test('when clicked on button function is invoked',()=>{
    const actionSpy = jest.fn();
    const buttons =shallow(
        <ButtonsComponent
            add={actionSpy}
            remove = {actionSpy}
            clear = {actionSpy}
        />
    );
    buttons.find('.btn').forEach((node)=> {
      node.simulate('click');
      expect(actionSpy).toHaveBeenCalled();
    });

  })

});