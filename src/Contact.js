import React, { Component } from "react";
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": "green",
        "1.0": "green"
    },
    shadowBlur: 5
});

class Contact extends Component {

    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isLoading: true
        };
    }
    componentDidMount() {

        this._isMounted = true;

        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(data => {
                    if (this._isMounted) {
                        this.setState({
                            data,
                            isLoading: false
                        });
                    }
                });
        }, 1000);
    
    }    

    componentWillUnmount() {
        this._isMounted = false;
    }

    
    render() {

        const { data, isLoading } = this.state;
        return (
            <div>
            <h2>GOT QUESTIONS?</h2>
            <p>The easiest thing to do is post on our <a href="http://forum.kirupa.com">forums</a>. </p>
            {isLoading ?
                    <TopBarProgress /> : 
                <div>
                    {data ? <p>{data.title}</p> : null}
                </div>    
            }</div>
        );
    }
}

export default Contact;