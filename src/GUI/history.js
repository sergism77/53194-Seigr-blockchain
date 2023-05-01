//from this page, users will be able to view their transaction history, and also search for specific transactions. Transactions will be shown as a scrollable list, when user clicks on a transaction, a pop up will show with more details about the transaction

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class History extends Component {
    render() {
        return (
            <div>
                <h1>History</h1>
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

export default connect(mapStateToProps)(History);