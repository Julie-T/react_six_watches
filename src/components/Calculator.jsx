import PropTypes from 'prop-types'
import React, { Component } from 'react'

export class Calculator extends Component {

    constructor(props) {
        super(props);
        this.divRef = React.createRef();
    }

    componentDidMount() {
        // this.loadActulRate();
    }

    state = {
        rubAmount: 0,
        rate: 57,
    }

    handleAmountChange = e => {
        this.setState({rubAmount: e.target.value});
    }

    calcUSDsum = () => {
        const { rate, rubAmount } = this.state;
        return ( rubAmount / rate ).toFixed(4);
    }

    loadActualRate = () => {
        fetch(process.env.REACT_APP_CURRENCY_URL)
        .then(response => response.json())
        .then(rates => {
            const findUSD = rate => rate.code === 'USD';
            const rate = rates.find(findUSD).value;
            this.setState({rate});
        })
    }

  static propTypes = {}

  render() {
    const { rate, rubAmount } = this.state;
    return (
      <div>
        <h3>Конвертер валют: </h3>
        <div>Текущий курс: {rate}</div>
        <div>
            <span>Сумма в рублях: </span>
            <input type="text" placeholder='Сумма в рублях'
            onChange={this.handleAmountChange}
            value={rubAmount}/>
        </div>
        <span>Сумма в долларах:  {this.calcUSDsum()}</span>
        <button
        //  onClick={this.loadActualRate}
         >
            Загрузить курс валют
        </button>
      </div>
    )
  }
}

export default Calculator