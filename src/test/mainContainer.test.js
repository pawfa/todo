import React from 'react';
import {shallow, mount, render} from 'enzyme';
import MainContainer from '../Containers/MainContainer';
import {ButtonsComponent} from '../Components/Buttons';

function setup() {

  const mainContainer = mount(
      <MainContainer
          data={[]}
      />,
  );

  mainContainer.find(ButtonsComponent).find('[value="Add"]').simulate('click');
  mainContainer.find(ButtonsComponent).find('[value="Add"]').simulate('click');

  return {
    main: mainContainer,
  };

}

describe('MainContainer', () => {
  const {main} = setup();

  test('clicking add button is increasing data length by one', () => {

    main.find(ButtonsComponent).find('[value="Add"]').simulate('click');
    expect(main.state().data).toHaveLength(3);

  });

  test('clicking remove button is decreasing data length by one', () => {

    main.find(ButtonsComponent).find('[value="Remove"]').simulate('click');
    expect(main.state().data).toHaveLength(2);

  });

  test('clicking clear button results in data length equal to zero', () => {

    main.find(ButtonsComponent).find('[value="Clear"]').simulate('click');
    expect(main.state().data).toHaveLength(0);

  });
});