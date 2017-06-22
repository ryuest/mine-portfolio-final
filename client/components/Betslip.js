import React, {Component} from 'react';
import BetSlipForm from './BetSlipForm'
import {showBetTime, toReturn} from '../helpers'

class Betslip extends Component {
    constructor() {
        super();
        this.state = {
            isReceipt: false
        }}

    renderBetSlipWrapper() {
        return (
            <div>
                <header className="betslip-header">Singles</header>
                <div id="bets-container-singles">
                    <BetSlipForm selections={this.props.selections} getReceipt={this.props.getReceipt} placeBet={this.props.placeBet}/>
                    <div className="betslip-footer__sub__clearslip">
                        <a type="button" className="clear" onClick={() => this.props.clearBets()}>Clear Betslip</a>
                    </div>
                </div>
            </div>
        )}

    render() {
        this.state.isReceipt = this.props.betslip.receipt
        return (
            <div className="betslip-selections-wrapper">
                {this.state.isReceipt > 0
                    ? <BetSlipReceipt disableReceipt={this.props.disableReceipt} stakes={this.props.stakes}/>
                    : this.renderBetSlipWrapper()}
            </div>
        )}}

class BetSlipReceipt extends Component {
    render() {
        return (
            <div className="betslip-content">
                <header className="betslip-header">
                    <div className="receipt-notice-box">
                        <em className="betslip-receipt_header-text">Bet Placed!</em>
                    </div>
                </header>
                <div className="betslip-receipt_details">
                    <h3 className="betslip-header">Singles</h3>
                    <div className="betslip-receipt-selection">
                        {Object.keys(this.props.stakes[this.props.stakes.length - 1].betStake.stakes).map(key =>
                          <BetPlacedSelectionRow
                          key={key}
                          disableReceipt={this.props.disableReceipt}
                          stakes={this.props.stakes[this.props.stakes.length - 1].betStake.stakes[key]}
                          selections={this.props.stakes[this.props.stakes.length - 1].betStake.selections[key]} />)}
                    </div>
                </div>
            </div>
        )}}

class BetPlacedSelectionRow extends Component {

    render() {
        return (
            <div className="betslip-receipt-selection_row">
                <div>
                    <span id="receipt-event-time">{showBetTime()}
                    </span>
                </div>
                <div>
                    <span id={"receipt-event-name_"+this.props.selections.selection}>{this.props.selections.selection.name}</span>
                </div>
                <button id="closeButton" onClick={() => this.props.disableReceipt()}>X</button>
                <div className="betslip-receipt-returns">
                    <div className="u-bold">
                        <span className="u-padding-right-tiny">Stake: 🎣
                        </span>
                        <span className="betslip-currency-symbol">{" "+this.props.stakes}</span>
                    </div>
                    <div className="betslip-receipt-returns_amount">
                        <span className="betslip-receipt-returns_label">To return: 🎣
                        </span>
                        <span className="betslip-currency-symbol">{" "+toReturn(this.props.stakes, this.props.selections.selection.price)}</span>
                    </div>
                </div>
            </div>
          )}}

export default Betslip;
