import * as React from 'react';
import './Todo.css';


export interface IProps { content: string; }

class TodoComponent extends React.Component<IProps> {

    public render() {
        return (
            <div className={'todo z-depth-1 font-weight-normal'}>
                {this.props.content}
            </div>
        );
    }
}

export default TodoComponent;