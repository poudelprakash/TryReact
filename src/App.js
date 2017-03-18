import React, {
    Component,
} from 'react';

class App extends Component {
    render() {
        return (
            <Parent>
                <div className="childA"></div>
                <div className="childB"></div>
            </Parent>
        );
    }
}

class Parent extends Component {
    render() {
        // let items = this.props.children;
       let items = React.Children.toArray(this.props.children).map(child=> child.props.className);
        console.log(items);
        return null;
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;
