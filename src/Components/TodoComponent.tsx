import * as React from 'react';
import './TodoComponent.css';


export interface ITodoComponentProps { content: string; }

class TodoComponent extends React.Component<ITodoComponentProps> {

    public render() {
        return (
            <div className={'todo z-depth-1'}>
                {this.props.content}
            </div>
        );
    }
}

export default TodoComponent;