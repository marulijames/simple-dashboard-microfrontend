import React, { Component } from 'react';
import './service-b-1-component.css';
import { Provider } from 'react-redux';
import Name from './name';


class ServiceB1 extends Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        let ret = <div></div>;
        if (this.state.store && this.state.globalEventDistributor) {
            ret =
                <Provider store={this.state.store}>
                    <div className="service-b-1-section" >
                        <p>Hi</p>
                        <Name></Name>
                        <p>This service is B-1 calling your name</p>
                    </div>
                </Provider>
        }

        return ret;

    }
}

export default ServiceB1;