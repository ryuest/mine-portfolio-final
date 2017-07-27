import React from 'react';
import {Link} from 'react-router-dom';
import Betslip, {OpenBets} from './Betslip';
import {ref, firebaseAuth} from '../data/baseConfig';
import store from '../store/configureStore';
import actions from '../actions/actionCreators';

class RightPanel extends React.Component {
    constructor() {
        super();
        this.state = {
            isSelected: false,
            isReceipt: false,
            isShowOpenBets: false
        }
    }

    componentDidMount() {
        this.removeListener = firebaseAuth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({authed: true, loading: false})
                store.dispatch(actions.fetchBets());
            } else {
                this.setState({authed: false, loading: false})
            }
        })
    }

    showOpenBets() {
        if (!this.state.isShowOpenBets) {
            this.props.showOpenBets()
        }
    }

    render() {
        this.state.isSelected = this.props.selections.length > 0
        this.state.isReceipt = this.props.betslip.receipt
        this.state.isShowOpenBets = this.props.betslip.openbets
        return (
            <div className="betslipwrapper">
                <div className="betslip-container">
                    <div className="betslip-section">
                        <nav className="betslip-navigation">
                            <ul className="betslip-navigation_menu">
                                <li id="betslip-tab" className="betslip-navigation_menu-item">
                                    <div className="betslip-navigation_menu-link">
                                        <span className="betslip-navigation_menu-text">Bet Slip</span>
                                    </div>
                                </li>
                                <li id="openbets-tab" className="betslip-navigation_menu-item">
                                    <div className="betslip-navigation_menu-link">
                                        <span className="betslip-navigation_menu-text" onClick={() => this.showOpenBets()}>Open Bets</span>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        {this.state.isSelected || this.state.isReceipt > 0
                            ? <Betslip {...this.props}/>
                            : <BetSlipErrorMessage message={"Your bet slip is currently empty"}/>}
                        {this.state.isShowOpenBets && this.state.authed > 0
                            ? <OpenBets {...this.props}/>
                            : null}
                        {this.state.authed > 0
                            ? null
                            : <BetSlipErrorMessage message={"Please Login"}/>}
                    </div>
                </div>
            </div>
        )
    }
}

const BetSlipErrorMessage = ({message}) => {
    return (
        <div >
          <Link className="navbar-brand-betslip" to="/login">{message}</Link>
        </div>
    )
}

const Message = ({props}) => {
    return (
        <div></div>
    )
}

export default RightPanel;
