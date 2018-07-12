import React from 'react';
import {shallow, mount, render} from 'enzyme';
import MainContainer from '../Containers/MainContainer';
import {ButtonsComponent} from '../Components/Buttons';

describe('MainContainer', () => {

  test('displays text based on props.content', () => {
    const main = mount(
        <MainContainer
            data={[]}
        />,
    );

    main.find(ButtonsComponent).find('[value="Add"]').simulate('click');
    main.find(ButtonsComponent).find('[value="Add"]').simulate('click');
    expect(main.state().data).toHaveLength(2);

    main.find(ButtonsComponent).find('[value="Remove"]').simulate('click');
    expect(main.state().data).toHaveLength(1);

    main.find(ButtonsComponent).find('[value="Clear"]').simulate('click');
    expect(main.state().data).toHaveLength(0);

  });
});