import React, { Component } from 'react';
import './home-section-component.css';
import { Provider } from 'react-redux';
import Name from './name';


class HomeSection extends Component {

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
                    <div className="home-section" >
                        <div className="content">
                            <h2>Welcome</h2>
                            <Name globalEventDistributor={this.state.globalEventDistributor}></Name>

                        </div>
                    </div>
                </Provider>
        }

        return ret;

    }
}

export default HomeSection;