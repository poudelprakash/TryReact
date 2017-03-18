import React, {
    Component,
    PropTypes,
} from 'react';

import Buttons from './components/Buttons'

class App extends Component {
    render() {
        return (
            <Buttons>
                <button value="A">A</button>
                <button value="B">B</button>
                <button value="C">C</button>
            </Buttons>
        );
    }
}


App.propTypes = {};
App.defaultProps = {};

export default App;
