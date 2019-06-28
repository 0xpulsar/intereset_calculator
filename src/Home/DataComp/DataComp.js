import React, { Component } from "react";
class DataComp extends Component {
  constructor(props) {
    super(props);
    this.state = { principal: "0", months: "0" };
  }
  handlePrincipalChange(event) {
    var value = event.target.value;
    if (!isNaN(value)) {
      this.setState({ principal: event.target.value });
      this.props.principalDataEvent(event.target.value);
    }
  }
  handleMonthsChange(event) {
    var value = event.target.value;
    if (!isNaN(value)) {
      this.setState({ months: event.target.value });
      this.props.monthsDataEvent(event.target.value);
    }
  }

  handleMonthsChange = this.handleMonthsChange.bind(this);
  handlePrincipalChange = this.handlePrincipalChange.bind(this);

  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body text-left">
            <b className="card-text">
              <div className="container">
                <h4>
                  <b>Loan Amount (500 - 5000 {this.props.currency})</b>
                </h4>
                <div className="row">
                  <div className="col-sm">
                    <input
                      type="text"
                      className={
                        this.state.principal <= 5000 &&
                        this.state.principal >= 500
                          ? "form-control valid-input"
                          : "form-control invalid-input"
                      }
                      id="principalINP"
                      placeholder="amount"
                      value={this.state.principal}
                      onChange={this.handlePrincipalChange.bind(this)}
                    />
                  </div>
                  <div className="col-sm">
                    <div class="slidecontainer">
                      <input
                        type="range"
                        min="500"
                        max="5000"
                        onChange={this.handlePrincipalChange.bind(this)}
                        className="slider"
                        id="prinRange"
                      />
                    </div>
                  </div>
                </div>
                <br />
                <h4>
                  <b>Loan Duration ( 6 - 24 months)</b>
                </h4>
                {/* months */}
                <div className="row">
                  <div className="col-sm">
                    <input
                      type="text"
                      className={
                        this.state.months <= 24 && this.state.months >= 6
                          ? "form-control valid-input"
                          : "form-control invalid-input"
                      }
                      id="MonthsINP"
                      placeholder="months"
                      value={this.state.months}
                      onChange={this.handleMonthsChange.bind(this)}
                    />
                  </div>
                  <div className="col-sm">
                    <div class="slidecontainer">
                      <input
                        type="range"
                        min="6"
                        max="24"
                        onChange={this.handleMonthsChange.bind(this)}
                        className="slider"
                        id="montRange"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </b>
          </div>
        </div>
      </div>
    );
  }
}

export default DataComp;
