import * as React from 'react';
import './Todo.css';


export interface IProps { content: string; }

export class TodoComponent extends React.PureComponent<IProps>{

    public render(){
        return (
            <div className={'todo z-depth-1 font-weight-normal'}>
                {this.props.content}
            </div>
        );
    }

}