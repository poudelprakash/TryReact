import React, {Component} from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {a: ''}
    }

    update() {
        this.setState({a: this.refs.a.value,
            b: this.refs.b.value});
    }

    render() {
        return <div>
            <input type="text"
                   ref="a"
                   onChange={this.update.bind(this)}/>
            {this.state.a}
            <hr/>
            <input type="text"
                   ref="b"
                   onChange={this.update.bind(this)}/>
            {this.state.b}
        </div>
    }
}
