import * as React from 'react';
import {ButtonsComponent} from "../Components/Buttons";
import {TodoWithStyle} from "../Components/Todo";

export interface IState {
    data: string[];
}

class MainContainer extends React.Component<{}, IState> {

    public state = {
        data: [],
    };

    public remove = () => {
        this.setState({
                data: this.state.data.slice(0, -1)
            }
        );
    };

    public add = () => {
        const taskName = 'Task number ' + this.state.data.length;
        this.setState({
                data: [...this.state.data, taskName]
            }
        );
    };

    public clear = () => {
        this.setState({
                data: []
            }
        )
    };
    public createTodos(){
        return this.state.data.map((e) => <TodoWithStyle key={e} content={e} />);
    }

    public shouldComponentUpdate(nextProps: any, nextState:any): boolean{

        return this.state.data.length !== nextState.data.length;
    }

    public render() {
        return (
            <div>
                <ButtonsComponent add={this.add} remove={this.remove} clear={this.clear}/>
                <div>
                    {this.createTodos()}
                </div>
            </div>
        );
    }
}

export default MainContainer;