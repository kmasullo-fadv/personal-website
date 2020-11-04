import React, {Component} from 'react';

export default class NotFound extends Component {
    static defaultProps = {
        history: {
            push: ()=>{}
        }
    }
    homeScreen = () => {
        this.props.history.push('/')
    }

    render() {
        this.homeScreen()
        return(<></>)
    }
}