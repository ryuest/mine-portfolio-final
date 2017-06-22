import React from 'react';
import events from '../data/events';

class CenterTabs extends React.Component {
    constructor() {
        super();
        this.state = {
            events: events
        }
    }
    render() {
        return (
            <div className="tabs_panels">
                <div>
                    <section id="tabs_panels-panel-in-play" data-panel="panel-in-play">
                        <span>
                            <section id="sectionheading-in-play">
                                <h2 className="h1 fl">In-Play</h2>
                                <Sport sport="Football"/>
                                <section id="match-in-play" className="betgroup">
                                    <div className="markets-group-container">
                                        <div className="events-group-container">
                                            <section id="market_wrapper-in-play">
                                                {Object.keys(this.state.events).map(key =>
                                                  <Event
                                                    key={key}
                                                    details={this.state.events[key]}
                                                    {...this.props}/>)}
                                            </section>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </span>
                    </section>
                </div>
            </div>
        )
    }
}

class Event extends React.Component {
    render() {
        const {details} = this.props;
        return (
            <div className="event">
                <div className="market">
                    <div className="market_content">
                        <ul className="btmarket__content-marginrs">
                            <li>
                                <a title={details.name} className="market_name">
                                    <div className="market_link-name">
                                        <span>{details.nameTeam1}</span>
                                        <span>{details.nameTeam2}</span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                    {details.markets.map((market, i) => <Market key={i} market={market} {...this.props}/>)}
                </div>
            </div>
        )
    }
}

const Market = React.createClass({
    render() {
        const {market} = this.props;
        return (
            <div id={market.id} className="market_actions" data-displayed="data-displayed from JSON" data-status="data-status from JSON">
                {market.selections.map((selection, i) => <Selection key={i} selection={selection} {...this.props}/>)}
            </div>
        )
    }
});

class Selection extends React.Component {
    constructor() {
        super();
        this.state = {
            isSelected: false,
            isCleared: false,
            colorGreen: false
        }
    }

    addToSelectedList(selection) {
        if (!this.state.isSelected) {
            this.setState({isSelected: true, colorGreen: true});
            this.props.getSelection(selection)
            if (this.props.betslip.receipt) {
                this.props.disableReceipt()
            }
        } else {
            this.setState({isSelected: false, colorGreen: false});
            this.props.removeSelection(selection)
        }
    }

    clearSelected() {
        if (this.state.isSelected) {
            this.setState({isSelected: false, colorGreen: false});
        }
    }

    componentDidUpdate() {
        this.state.isCleared = this.props.selections.length === 0
        if (this.state.isCleared) {
            this.clearSelected()
        }
    }

    render() {
        const {selection} = this.props;
        return (
            <div className="market_selection">
                <button onClick={() => this.addToSelectedList(selection)} style={this.state.colorGreen
                    ? {
                        background: '#36EA4C'
                    }
                    : {
                        background: '#D6DCD7'
                    }} id={selection.id} className="betbutton" data-displayed="data-displayed2 from JSON" data-status="data-status from JSON">
                    <span className="betbutton_odds">{selection.price}</span>
                    <span className="icon"></span>
                </button>
            </div>
        )
    }
}

const Sport = ({sport}) => {
    return (
        <div className="sport-container">
            <header className="header-dropdown">
                <h3 className="fl">{sport}</h3>
            </header>
        </div>
    )
}

export default CenterTabs;
