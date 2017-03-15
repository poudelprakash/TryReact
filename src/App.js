import React, {Component} from 'react';

export default class App extends Component {
    render() {
        let txt = this.props.txt;
        return <h1>{txt}</h1>
    }
}

App.propTypes = {
    txt: React.PropTypes.string,
    cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
    txt: 'This is default value'
};

{/*exprt default const App = () => <h1>Hello stateless</h1>*/
}