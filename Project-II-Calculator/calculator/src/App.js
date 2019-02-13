import { Parser } from 'expr-eval';
import React from 'react';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalculatorControls from './components/DisplayComponents/CalculatorControls';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '' };
    this.updateTotal = this.updateTotal.bind(this);
  }

  updateTotal(text) {
    switch (text) {
      case 'clear':
        this.setState({ total: '' });
        break;
      case '=':
        this.setState({ total: Parser.evaluate(
          this.state.total
            .replace('×', '*')
            .replace('÷', '/')
            .replace('–', '-')
        )});
        break;
      default:
        this.setState({ total: this.state.total + text });
        break;
    }
  }

  render() {
    return (
      <div className='app-container'>
        <CalculatorDisplay text={this.state.total} />
        <CalculatorControls updateTotal={this.updateTotal} />
      </div>
    );
  }
}

export default App;
