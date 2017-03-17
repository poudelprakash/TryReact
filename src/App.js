import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {val: 0};
        this.update = this.update.bind(this);
    }

    update() {
        this.setState({val: this.state.val + 1})
    }

    componentWillMount() {
        console.log('comp will mount')
    }

    render() {
        console.log('render');
        return <button onClick={this.update}>{this.state.val}</button>
    }

    componentDidMount() {
        console.log('component has mounted')
    }

    componentWillUnMount() {
        console.log("component will unmount")
    }
}

export default class Wrapper extends Component {
    mount() {
        ReactDom.render(<App/>, document.getElementById('a'));
    }

    unmount() {

        ReactDom.unmountComponentAtNode(document.getElementById('a'));
    }

    render() {
        return <div>
            <button onClick={this.mount.bind(this)}>Mount</button>
            <button onClick={this.unmount.bind(this)}>Unmount</button>
            <div id="a"></div>
        </div>
    }
}