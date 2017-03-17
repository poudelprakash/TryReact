import React, {Component} from 'react';

const HOC =(InnerComponent)=> class extends Component{
    constructor(){
        super();
        this.state = {count: 0}
    }
    componentWillMount(){
        console.log('will mount')
    }
    render(){
        return <InnerComponent
            {...this.props}
            {...this.state}
            update={this.update.bind(this)}
        />
    }
    update(){
this.setState({count: this.state.count+1})
    }
};

export default class App extends Component {
    render() {
        return (
            <div>
                <Button>Button</Button>
                <hr/>
                <LabelHoc>Label</LabelHoc>
            </div>
        )
    }
}

const Button = HOC((props) => <button onClick={props.update}>
    {props.children} - {props.count}
    </button>);

class Label extends Component {
    componentWillMount(){
     console.log('label will mount')
    }
    render() {
        return (
            <label onMouseMove={this.props.update}>
                {this.props.children} - {this.props.count}

            </label>
        )
    }
}

const LabelHoc = HOC(Label);