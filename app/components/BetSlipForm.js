import actions from '../actions/actionCreators';

import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {Input, Button, Message} from 'semantic-ui-react';
import {ref} from '../data/baseConfig'

class BetSlipForm extends Component {

    placeBetGetReceipt(data, selections) {
        this.props.placeBet(data, selections)
        this.props.getReceipt()
        this.saveBet(data, selections)
    }

     saveBet (data, selections) {
      ref.child(`users/vypa5Y5ucDMm91sHEXF8knBEemF3/info/bets`) // TO-DO users firebaseAuth
        .set({
          stakes: data,
          selections: selections
        })
        .then(() => data)
    }

    render() {
        const {handleSubmit, selections} = this.props;
        return (
            <form >
                {Object.keys(selections).map((key, i) => (<BetSlipSelection key={key} i={i} selection={selections[key]}/>))}
                <div className="betslip-bet-actions">
                    <button onClick={handleSubmit((data) => {
                        this.placeBetGetReceipt(data, selections)
                    })}>Place Bet</button>
                </div>
            </form>
        )}}

class BetSlipSelection extends Component {

    constructor() {
      super()
      this.state = {winTotal:0}
    }

    onUpdateWinTotal(e, price) {
      var winTotal = ((Number(e.target.value)*eval(price))+Number(e.target.value)).toFixed(2)
      this.setState( {winTotal:winTotal})
    }

    renderInput({input, selection: {selection}}) {
        return (
            <div>
                <Input placeholder="🎣 0.00" {...input} autoComplete="new-bet" />
            </div>
        )}
    render() {
        return (
            <div id={"single-bet_" + this.props.selection.selection.id} className="betslip-selection">
                <header>{this.props.selection.selection.eventName}</header>
                <div className="betslip-selection_content">
                    <span className="betslip-selection_event">
                        <em className="u-highlight">{this.props.selection.selection.name}</em>
                    </span>
                </div>
                <div className="betslip-selection_stake">
                    <span className="betslip-selection_input">
                        <Field name={""+this.props.i}
                               type="text"
                               component={this.renderInput}
                               selection={this.props.selection}
                               onChange={e => this.onUpdateWinTotal(e, this.props.selection.selection.price)}/>
                    </span>
                </div>
                <div className="betslip-footer__totals">
                    <div className="betslip-footer__to-return">
                        <div className="betslip-footer__to-return-label">
                            To return:
                            <span className="betslip-footer__total-stake-price">
                                {this.state.winTotal}</span>
                        </div>
                    </div>
                </div>
            </div>
        )}}

BetSlipForm = reduxForm({
    form: 'bet', // a unique identifier for this form
})(BetSlipForm)

export default BetSlipForm;
