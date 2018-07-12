import * as React from 'react';
import './Todo.css';


export interface IProps { content: string; }

export const TodoComponent = (props: IProps)=>{
        return (
            <div className={'todo z-depth-1 font-weight-normal'}>
                {props.content}
            </div>
        );

};