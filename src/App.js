import React, {Component} from 'react';
import ReactDom from 'react-dom'
export default class App extends Component {
    constructor() {
        super();
        this.state = {a: ''}
    }

    update() {
        this.setState({
            a: this.a.refs.input.value,
            b: this.refs.b.value
        });
    }

    render() {
        return <div>
            <Input ref={component => this.a = component}
            update={this.update.bind(this)}/>
            {this.state.a}
            <hr/>
            <input type="text"
                   ref="b"
                   onChange={this.update.bind(this)}/>
            {this.state.b}
        </div>
    }
}

class Input extends Component {
    render() {
        return(
        <div><input
            ref="input"
            type="text" onChange={this.props.update}/>
        </div>)
        }
}
