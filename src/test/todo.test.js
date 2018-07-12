import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {TodoComponent} from '../Components/Todo';


describe('TodoComponent', () =>{

  test('displays text based on props.content',()=>{
    const toDo =shallow(
        <TodoComponent
            content='Test todo'
        />
    );
    expect(toDo.find('.todo').text()).toBe('Test todo');

    toDo.setProps({content:"New content"});

    expect(toDo.find('.todo').text()).toBe('New content');
  })

});