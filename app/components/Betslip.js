import React, {Component} from 'react';
import BetSlipForm, { BetSlipSelection } from './BetSlipForm';
import { showBetTime, toReturn, timeConverter } from '../helpers';

class Betslip extends Component {
    constructor() {
        super();
        this.state = {
            isReceipt: false
        }
    }

    renderBetSlipWrapper() {
        return (
            <div>
                <header className="betslip-header">Singles</header>
                <div id="bets-container-singles">
                    <BetSlipForm
                      selections={this.props.selections}
                      getReceipt={this.props.getReceipt}
                      placeBet={this.props.placeBet}/>
                    <div className="betslip-footer__sub__clearslip">
                        <a type="button" className="clear" onClick={() => this.props.clearBets()}>Clear Betslip</a>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        this.state.isReceipt = this.props.betslip.receipt
        return (
            <div className="betslip-selections-wrapper">
                {this.state.isReceipt > 0
                    ? <BetSlipReceipt disableReceipt={this.props.disableReceipt} stakes={this.props.stakes}/>
                    : this.renderBetSlipWrapper()}
            </div>
        )
    }
}

class BetSlipReceipt extends Component {
    render() {
      const {stakes} = this.props;
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
                        {Object.keys(stakes[stakes.length - 1].betStake.stakes).map(key =>
                          <BetPlacedSelectionRow
                            key={key}
                            disableReceipt={this.props.disableReceipt}
                            stakes={stakes[stakes.length - 1].betStake.stakes[key]}
                            selections={stakes[stakes.length - 1].betStake.selections[key]}/>)}
                    </div>
                </div>
            </div>
        )
    }
}

class BetPlacedSelectionRow extends Component {
    render() {
      const {selection} = this.props.selections;
      const {label, stakes} = this.props;
        return (
            <div className="betslip-receipt-selection_row">
                <div>
                    <span id="receipt-event-time">{showBetTime()}
                    </span>
                </div>
                <div>
                    <span id={"receipt-event-name_" + selection.id}>{selection.name}</span>
                </div>
                <button id="closeButton" onClick={() => this.props.disableReceipt()}>X</button>
                <div className="betslip-receipt-returns">
                    <div className="u-bold">
                        <span className="u-padding-right-tiny">Stake: 🎣
                        </span>
                        <span className="betslip-currency-symbol">{" " + stakes}</span>
                    </div>
                    <div className="betslip-receipt-returns_amount">
                        <span className="betslip-receipt-returns_label">To return: 🎣
                        </span>
                        <span className="betslip-currency-symbol">{" " + toReturn(stakes, selection.price)}</span>
                    </div>
                </div>
            </div>
        )
    }
}

export class OpenBets extends Component {
    constructor() {
        super();
        this.state = {
            labels: [],
            openbets: []
        }
    }

    populateGraph() {
        Object.keys(this.props.bets).map((key) => {
            this.state.labels.push(timeConverter(parseInt(key)))
            this.state.openbets.push(this.props.bets[key])
        })
    }

    render() {
        return (
            <div className="betslip-receipt-selection_row">
                <div>
                    <span id="receipt-event-time">{this.populateGraph()}
                    </span>
                </div>
                {Object.keys(this.state.openbets).map((key, i) => (
                  <OpenBetSelection
                    key={key}
                    i={i}
                    disableOpenBets={this.props.disableOpenBets}
                    stakes={this.state.openbets[i].stakes[0]}
                    selection={this.state.openbets[i].selections[0]}
                    label={this.state.labels[key]}/>))}
            </div>
        )
    }
}

class OpenBetSelection extends Component {
    render() {
      const {selection} = this.props.selection;
      const {label, stakes} = this.props;
        return (
            <div id={"single-bet_" + selection.id} className="betslip-selection">
                <header>{selection.eventName}</header>
                <div className="betslip-selection_content">
                    <span className="betslip-selection_event">
                        <em className="u-highlight">{selection.name}</em>
                    </span>
                </div>
                <div className="betslip-receipt-selection_row">
                    <div>
                        <span id="receipt-event-time">{label}
                        </span>
                    </div>
                    <div>
                        <span id={"receipt-event-name_" + selection.id}>{selection.name}</span>
                    </div>
                    <button id="closeButton" onClick={() => this.props.disableOpenBets()}>X</button>
                    <div className="betslip-receipt-returns">
                        <div className="u-bold">
                            <span className="u-padding-right-tiny">Stake: 🎣
                            </span>
                            <span className="betslip-currency-symbol">{" " + stakes}</span>
                        </div>
                        <div className="betslip-receipt-returns_amount">
                            <span className="betslip-receipt-returns_label">To return: 🎣
                            </span>
                            <span className="betslip-currency-symbol">{" " + toReturn(stakes, selection.price)}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Betslip;
