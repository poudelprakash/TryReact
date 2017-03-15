import React, {Component} from 'react';

export default class App extends Component{
    render(){
        let txt = this.props.txt;
        return <h1>{txt}</h1>
    }
}

{/*exprt default const App = () => <h1>Hello stateless</h1>*/}