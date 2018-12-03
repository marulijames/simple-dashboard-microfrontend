import React, { Component } from 'react';
import './header-section-component.css';
class HeaderSection extends Component {

    componentDidCatch(error, info) {
        console.log(error, info);
    }

    render() {
        return (
            <div className="header-section">
				<h4>Dashboard App</h4>
			</div>
        );
    }
}

export default HeaderSection;