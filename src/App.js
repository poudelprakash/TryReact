import React, {Component} from 'react';
import ReactDom from 'react-dom';
export default class App extends Component {
    constructor() {
        super();
        this.state = {increasing: false}
    }

    update() {
        ReactDom.render(<App val={this.props.val + 1}/>, document.getElementById('root'))
    }

    componentWillReceiveProps(nextProps) {
        this.setState({increasing: nextProps.val >  this.props.val})
    }

    shouldComponentUpdate(nextProps, nextState){
        return nextProps.val % 5 === 0;
    }
    componentDidUpdate(prevProps, prevState){
        console.log(`prevProps: ${prevProps.val}` )
    }

    render() {
        console.log(this.state.increasing);
        return (<div>
            <button onClick={this.update.bind(this)}>{this.props.val}</button>
        </div>)
    }
}
App.defaultProps = {val: 0};
// export default class App extends Component{
//     constructor(){
//         super();
//         this.state ={val: 0}
//     }
//     update(){
//         this.setState({val: this.state.val+1})
//     }
//     render() {
//         return (<div>
//             <button onClick={this.update.bind(this)}>{this.state.val}</button>
//         </div>)
//     }
// }
