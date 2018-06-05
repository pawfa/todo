import * as React from 'react';
import ButtonsComponent from "../Components/ButtonsComponent";
import TodosContainer from "./TodosContainer";

export interface IMainContainerState {
    data: string[];
}

class MainContainer extends React.Component<{}, IMainContainerState> {

    constructor(props: {}) {
        super(props);
        this.state = {data: []};
    }

    public remove = () => {
        this.setState(
            {
                data: this.state.data.slice(0, -1)
            }
        );
    };

    public add = () => {
        const taskName = 'Task number ' + this.state.data.length;
        this.setState(
            {
                data: [...this.state.data, taskName]
            }
        );
    };

    public clear = () => {
        this.setState(
            {
                data: []
            }
        )
    };


    public render() {
        return (
            <div>
                <ButtonsComponent add={this.add} remove={this.remove} clear={this.clear}/>
                <TodosContainer data={this.state.data}/>
            </div>
        );
    }
}

export default MainContainer;