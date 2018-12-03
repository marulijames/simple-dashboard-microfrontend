import React, { Component } from 'react';
import './service-b-component.css';
const navigateTo = url => window.history.pushState(null, null, url);

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: "#" + window.location.href.split('#')[1]
        }
    }

    handleTabsClick = () => {
        this.setState(() => ({ pathname: "#" + window.location.href.split('#')[1] }));
    };

    render() {
        return (

            <div className="tabs" onClick={this.handleTabsClick}>

                {this.props.children(this.state.pathname)}

            </div>
        )
    }
}

const TabItem = ({ link, children, pathname }) => {
    const classes = ['col-6', 'tab-item'];
    if (pathname === link) {
        classes.push('tab-item-selected')
    }
    return (
        <div className={classes.join(' ')} onClick={() => navigateTo(link)}>
            {children}
        </div>
    );
};

class ServiceB extends Component {

    state = {
        store: this.props.store,
        globalEventDistributor: this.props.globalEventDistributor
    };

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        return (<div className="service-b-section" >
            <div className="content">
                <h4>Content from Service B</h4>
                <Tabs>
                    {(pathname) => (
                        <div className="container-fluid">
                            <div className="row">
                                <TabItem pathname={pathname} link='#/nested/1'>B-1 Tab</TabItem>
                                <TabItem pathname={pathname} link='#/nested/2'>B-2 Tab</TabItem>
                            </div>
                        </div>
                    )}
                </Tabs>
                <div id="service-b-child"></div>
            </div>
        </div>)
    }
}

export default ServiceB;