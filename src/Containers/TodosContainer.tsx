import * as React from 'react';
import TodoComponent from "../Components/TodoComponent";

export interface ITodoContainerProps { data: string[]; }

class TodoContainer extends React.Component<ITodoContainerProps> {

    public render() {
        const {data} = this.props;
        return (
            <div>
                {data.map((e) => <TodoComponent key={e} content={e}/>)}
            </div>
        );
    }
}

export default TodoContainer;