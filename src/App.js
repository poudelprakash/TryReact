import React, {Component} from 'react';
import ReactDom from 'react-dom';
export default class App extends Component {
    update() {
        ReactDom.render(<App val={this.props.val+1}/>, document.getElementById('root'))
    }

    render() {
        return (<div>
            <button onClick={this.update.bind(this)}>{this.props.val}</button>
        </div>)
    }
}

App.defaultProps = {val: 0}