import * as React from 'react';
import './Buttons.css';

export interface IProps {
    add: () => void,
    remove: () => void,
    clear: () => void,
}

export class ButtonsComponent extends React.PureComponent<IProps> {

    public render() {
        return (
            <div className={'buttons'}>
                <button value={'Add'} className={'btn btn-primary'} onClick={this.props.add}>Add</button>
                <button value={'Remove'} className={'btn btn-primary'} onClick={this.props.remove}>Remove</button>
                <button value={'Clear'} className={'btn btn-primary'} onClick={this.props.clear}>Clear</button>
            </div>
        );
    }
}