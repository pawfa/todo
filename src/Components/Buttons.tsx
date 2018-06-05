import * as React from 'react';
import './Buttons.css';

export interface IProps {
    add: ()=> void,
    remove: ()=> void,
    clear: ()=> void,
}

class ButtonsComponent extends React.Component<IProps,{}> {

    public render() {
        const {add, remove, clear}  = this.props;
        return (
            <div className={'buttons'}>
                <button value={'Add'} className={'btn btn-primary'} onClick={add}>Add</button>
                <button value={'Remove'} className={'btn btn-primary'} onClick={remove}>Remove</button>
                <button value={'Clear'} className={'btn btn-primary'} onClick={clear}>Clear</button>
            </div>
        );
    }
}

export default ButtonsComponent;