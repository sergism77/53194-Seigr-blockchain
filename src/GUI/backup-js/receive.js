//this will be shown as a popup from the wallet page. From here users will be able to copy their address to clipboard, or generate a QR code for their address

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Receive extends Component {
    render() {
        return (
            <div>
                <h1>Receive</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        address: state.address,
        token: state.token
    };
}

export default connect(mapStateToProps)(Receive);
