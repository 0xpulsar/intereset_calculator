import React, { Component } from "react";
import DataComp from "./DataComp/DataComp";
import ResComp from "./ResComp/ResComp";
import axios from "axios";
import "./Home.css";
const initialState = {
  interestRate: "0",
  monthlyPayment: "0",
  currency: "USD",
  months: "0",
  principal: "0",
  dataChange: "False"
};
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handlePrincipalDataEvent(data) {
    this.setState({ principal: data, dataChange: "True" });
  }
  handleMonthsDataEvent(data) {
    // console.log(data);

    this.setState({ months: data, dataChange: "True" });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      console.log(this.state.dataChange);
      if (
        this.state.months >= 6 &&
        this.state.months <= 24 &&
        this.state.principal >= 500 &&
        this.state.principal <= 5000 &&
        this.state.dataChange == "True"
      ) {
        //Sending data
        this.handleDataEvent();
        console.log("Data send..");
      }
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleDataEvent(event) {
    //send data to axios and get the result back
    var urlWithData =
      "https://ftl-frontend-test.herokuapp.com/interest?amount=" +
      parseInt(this.state.principal) +
      "&numMonths=" +
      parseInt(this.state.months) +
      "";

    axios.get(urlWithData).then(res => {
      // save the result in the state
      const rData = res.data;
      console.log("Data recevied..");
      this.setState({
        interestRate: rData.interestRate,
        monthlyPayment: rData.monthlyPayment.amount,
        currency: rData.monthlyPayment.currency,
        months: rData.numPayments,
        principal: rData.principal.amount,
        dataChange: "False"
      });
    });
  }
  handleDataEvent = this.handleDataEvent.bind(this);
  handlePrincipalDataEvent = this.handlePrincipalDataEvent.bind(this);
  handleMonthsDataEvent = this.handleMonthsDataEvent.bind(this);

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <DataComp
              dataEvent={this.handleDataEvent}
              principalDataEvent={this.handlePrincipalDataEvent}
              monthsDataEvent={this.handleMonthsDataEvent}
            />
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
