import React from 'react';
import store from '../store';
import Betslip from './Betslip';

class RightPanel extends React.Component {
    constructor() {
        super();
        this.state = {
         isSelected: false,
         isReceipt: false
       }
}

render() {
  this.state.isSelected = this.props.selections.length > 0
  this.state.isReceipt = this.props.betslip.receipt
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
                                    <span className="betslip-navigation_menu-text">Open Bets</span>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    {this.state.isSelected || this.state.isReceipt > 0 ?
                      <Betslip {...this.props}/> : null }
                </div>
            </div>
        </div>
    )}}

export default RightPanel;
