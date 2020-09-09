import {connect} from 'react-redux'
import * as actions from '../../actions'
import React from 'react';


class Signout extends React.Component {

    componentDidMount(){

        this.props.signout();
    }

    render() {
        return (
            <div>
                Sorry to see you go
            </div>
        );
    }
}



export default connect(null, actions)(Signout)