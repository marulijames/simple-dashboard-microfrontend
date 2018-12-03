import React from "react";
import { connect } from "react-redux";
import TextField from '@material-ui/core/TextField'

class ConnectedName extends React.Component {
    
    handleChange = () => event => {
        this.props.globalEventDistributor.dispatch({ type: 'CHANGE_NAME', name: event.target.value });
    };


    render() {
        return (
            <div>
                <h2 style={{color:'#4d53a8'}}>{this.props.name}</h2>
                <br />
                <p>This is your home page served by Service A</p>
                <form noValidate autoComplete="off">
                    <TextField
                        label="Name"
                        className='name-textfield'
                        inputProps={{ maxLength: 25 }}
                        onChange={this.handleChange()}
                        margin="normal"
                    />
                </form>
            </div>)
    }
}
const mapStateToProps = state => {
    return { name: state.name };
};
export default connect(mapStateToProps)(ConnectedName);
