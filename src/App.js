import React, {Component} from 'react';

export  default class App extends Component {
    constructor() {
        super();
        this.state = {items: []}
    }

    componentWillMount() {
        fetch('http://swapi.co/api/people/?format=json').then(response => response.json()).then(
            ({results: items}) => this.setState({items})
        )
    }

    render() {
        let items = this.state.items;
        return (<div>

            {items.map(item => <Person key={item.name} person={item}/>)}
        </div>)
    }
}

const Person = (props) => <h4>{props.person.name}</h4>