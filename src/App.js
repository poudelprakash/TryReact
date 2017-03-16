import React, {Component} from 'react';

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            txt: 'this is the state text'
        }
    }

    update(e) {
        this.setState({txt: e.target.value})
    }

    render() {
        let txt = this.state.txt;
        return <div>
            <Widget update={this.update.bind(this)} />
            <Widget update={this.update.bind(this)} />
            <Widget update={this.update.bind(this)} />
            <h1>{txt}</h1>
            <h2>{this.props.txt}</h2>
        </div>
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'This is default value'
};

const Widget = (props)=> <input type="text" onChange={props.update}/>

{/*exprt default const App = () => <h1>Hello stateless</h1>*/
}