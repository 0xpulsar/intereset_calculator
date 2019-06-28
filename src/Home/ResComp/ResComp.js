import React, { Component } from "react";

class ResComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body text-left">
            <h2 className="card-title">
              <b>Result</b>
            </h2>

            <b className="card-text ">
              Principal:{" "}
              <b>
                {this.props.principal} {this.props.currency}
              </b>{" "}
              <br />
              Interest Rate: <b>{this.props.interestRate * 100}%</b>
              <br />
              monthly Payment:
              <b>
                {this.props.monthlyPayment} {this.props.currency}
              </b>
              <br />
              Duration:
              <b>{this.props.months}</b>
            </b>
          </div>
        </div>
      </div>
    );
  }
}

export default ResComp;
