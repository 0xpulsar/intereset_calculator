import React, { Component } from "react";
class DataComp extends Component {
  constructor(props) {
    super(props);
    this.state = { principal: "", months: "" };
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
            <h2 className="card-title">
              <b>Data Input</b>
            </h2>
            <b className="card-text">
              <form>
                <input
                  type="text"
                  className={
                    this.state.principal <= 5000 && this.state.principal >= 500
                      ? "form-control "
                      : "form-control invalid-input"
                  }
                  id="principalINP"
                  placeholder="Loan Amount ($500 - $5000)"
                  value={this.state.principal}
                  onChange={this.handlePrincipalChange.bind(this)}
                />
                <br />
                <input
                  type="text"
                  className={
                    this.state.months <= 24 && this.state.months >= 6
                      ? "form-control "
                      : "form-control invalid-input"
                  }
                  id="MonthsINP"
                  placeholder="Loan Duration ( 6 - 24 months)"
                  value={this.state.months}
                  onChange={this.handleMonthsChange.bind(this)}
                />
              </form>
            </b>
          </div>
        </div>
      </div>
    );
  }
}

export default DataComp;
