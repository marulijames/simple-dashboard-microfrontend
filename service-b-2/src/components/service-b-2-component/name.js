import React from "react";
import { connect } from "react-redux";

class ConnectedName extends React.Component {
    render() {
        return (
            <div>
                <p style={{ color: '#4d53a8' }}>{this.props.name}</p>
            </div>)
    }
}
const mapStateToProps = state => {
    return { name: state.name };
};
export default connect(mapStateToProps)(ConnectedName);
