import React, { Component } from "react";
import DataComp from "./DataComp/DataComp";
import ResComp from "./ResComp/ResComp";
import axios from "axios";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interestRate: "0",
      monthlyPayment: "0",
      currency: "USD",
      months: "0",
      principal: "0"
    };
  }
  handleDataEvent(event) {
    //send data to axios and get the result back
    var urlWithData =
      "https://ftl-frontend-test.herokuapp.com/interest?amount=" +
      parseInt(event.principal) +
      "&numMonths=" +
      parseInt(event.months) +
      "";
    // console.log(this.state);

    axios.get(urlWithData).then(res => {
      // save the reasult in the state
      const rData = res.data;
      console.log(rData);
      this.setState({
        interestRate: rData.interestRate,
        monthlyPayment: rData.monthlyPayment.amount,
        currency: rData.monthlyPayment.currency,
        months: rData.numPayments,
        principal: rData.principal.amount
      });
    });
  }
  handleDataEvent = this.handleDataEvent.bind(this);
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <DataComp dataEvent={this.handleDataEvent} />
          </div>
          <div className="col-sm">
            <ResComp
              interestRate={this.state.interestRate}
              monthlyPayment={this.state.monthlyPayment}
              currency={this.state.currency}
              months={this.state.months}
              principal={this.state.principal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
