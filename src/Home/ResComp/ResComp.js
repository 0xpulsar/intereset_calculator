import React, { Component } from "react";

class ResComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Result</h5>
            <b class="card-text">
              Principal:{" "}
              <b>
                {this.props.principal} {this.props.currency}
              </b>{" "}
              Interest Rate: <b>{this.props.interestRate}%</b>.<br />
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
