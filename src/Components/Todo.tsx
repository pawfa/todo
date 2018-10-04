/* tslint:disable */
import * as React from 'react';
import './Todo.css';
import {withStyle} from "./WithStyle";

export interface IProps{
    content: string;
}

class TodoComponent extends React.PureComponent<IProps>{

    public render(){
    console.log(this.props);
        return (
            <div className={'todo z-depth-1 font-weight-normal'}>
                {this.props.content}
            </div>
        );
    }

}
export const TodoWithStyle = withStyle(TodoComponent);