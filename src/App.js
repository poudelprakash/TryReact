import React, {
    Component,
} from 'react';

import './App.css'
class App extends Component {
    constructor() {
        super();
        this.state = {
            input: '/*add your jsx here*/',
            output: '',
            err: ''
        }
    }

    update(e) {
        let code = e.target.value;
        try {
            this.setState({
                output: window.Babel.transform(code, {
                    presets: ['es2015', 'react']
                }).code,
                err: ''
            })
        }catch(err){
            this.setState({err: err.message})
        }
    }

    render() {
        return (
            <div>
                <header>{this.state.err}</header>
                <div className="container">
                    <textarea onChange={this.update.bind(this)} defaultValue={this.state.input} cols="60"
                              rows="10"/>
                    <pre>
                        {this.state.output}
                    </pre>
                </div>
            </div>
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
