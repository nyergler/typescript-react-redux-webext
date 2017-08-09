import * as React from "react";
import { Component, PropTypes } from "react";
import * as actions from '../actions/popup';
import {connect} from 'react-redux';

import Nested from './nested-component';

interface PopupProps {
  backgroundCounter: number,
  uiCounter: number,
  incrementUICounter: any,
  decrementUICounter: any,
};
interface PopupState { activeTab: browser.tabs.Tab | null };

class ActiveTabPopup extends Component {
  static propTypes = {
    backgroundCounter: PropTypes.number.isRequired,
    uiCounter: PropTypes.number.isRequired,
    incrementUICounter: PropTypes.func.isRequired,
    decrementUICounter: PropTypes.func.isRequired
  };

  state: PopupState;
  props: PopupProps;

  constructor(props: PopupProps) {
    super(props);
    this.state = { activeTab: null };
  }

  componentDidMount() {
    // Get the active tab and store it in component state.
    browser.tabs.query({ active: true }).then(
      tabs => this.setState({ activeTab: tabs[0] })
    );
  }

  render() {
    const { activeTab } = this.state;
    const {
      backgroundCounter,
      uiCounter,
      incrementUICounter,
      decrementUICounter
    } = this.props;

    return (
      <div>
        <h1>React Component</h1>
        <p>
          This is an example of a popup UI in React.
        </p>
        <p>
          Active tab: {activeTab ? activeTab.url : '[waiting for result]'}
        </p>
        <Nested />
        <div style={{ width: 200 }}>
          <div>
            Background counter: {backgroundCounter}
          </div>
          <div>
            UI counter: {uiCounter}
            <div>
              <button onClick={decrementUICounter}>-</button>
              <span> </span>
              <button onClick={incrementUICounter}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

let myactions = {
  "incrementUICounter": actions.incrementUICounter,
  "decrementUICounter": actions.decrementUICounter,
};

export default connect(state => state, myactions)(ActiveTabPopup);