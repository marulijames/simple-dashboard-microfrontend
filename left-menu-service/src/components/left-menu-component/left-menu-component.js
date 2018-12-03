import React, { Component } from 'react';
import './left-menu-component.css';
import Icon from '@material-ui/core/Icon';
const navigateTo = url => window.history.pushState(null, null, url);

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathname: "#" + window.location.href.split('#')[1]
        }
    }
    
    handleMenuClick = () => {
        this.setState(() => ({ pathname: "#" + window.location.href.split('#')[1] }));
    };

    render() {
        return (
            <div className="menu" onClick={this.handleMenuClick}>
                {this.props.children(this.state.pathname)}
            </div>
        )
    }
}

const MenuItem = ({ link, children, pathname }) => {
    const classes = ['menu-item'];
    if (pathname === link) {
        classes.push('menu-item-selected')
    }
    return (
        <div className={classes.join(' ')} onClick={() => navigateTo(link)}>
            {children}
            <Icon >
                keyboard_arrow_right
                </Icon>

        </div>
    );
};

class LeftMenu extends Component {
    componentDidCatch(error, info) {
        console.log(error, info);
    }
    
    render() {
        return (
            <div className="left-menu-content">
                <Menu>
                    {(pathname) => (
                        <div className='menu-items'>
                            <MenuItem pathname={pathname} link='#/home'>Home </MenuItem>
                            <MenuItem pathname={pathname} link='#/nested/1'>Nested Fragments</MenuItem>
                            <MenuItem pathname={pathname} link='#/list'>List</MenuItem>
                        </div>
                    )}
                </Menu>
            </div>
        );
    }
}

export default LeftMenu;