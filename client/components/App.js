import React from 'react';
import LeftMenuPageItem from './LeftMenuPageItem';
import CenterTabs from './CenterTabs';
import RightPanel from './RightPanel';
import Account from './Account'

class App extends React.Component {
    render() {
        return (
            <div className="off-canvas_inner-wrapper">
                <aside className="off-canvas_left">
                    <div className="left-nav">
                        <nav>
                            <ul className="c-list-icon">
                                {Object.keys(this.props.pages).map(key => <LeftMenuPageItem key={key} details={this.props.pages[key]}/>)}
                                <li className="c-list_item">
                                    <a className="c-list_external"
                                      href="https://github.com/ryuest/mine-portfolio-templates"
                                      title="GitHub" id="nav-github">GitHub
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
                <div className="off-canvas_main">
                    <CenterTabs
                      getSelection={this.props.getSelection}
                      selections={this.props.selections}
                      removeSelection={this.props.removeSelection}
                      betslip={this.props.betslip}
                      disableReceipt={this.props.disableReceipt}/>
                      <Account/>
                </div>
                <div className="off-canvas_right">
                    <RightPanel
                      selections={this.props.selections}
                      clearBets={this.props.clearBets}
                      getReceipt={this.props.getReceipt}
                      betslip={this.props.betslip}
                      disableReceipt={this.props.disableReceipt}
                      placeBet={this.props.placeBet}
                      stakes={this.props.stakes}/>
                </div>
            </div>
          )
      }
  }

  export default App;
