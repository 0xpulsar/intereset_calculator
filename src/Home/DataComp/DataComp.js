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
    }
  }
  handleMonthsChange(event) {
    var value = event.target.value;
    if (!isNaN(value && value >= 6 && value <= 24)) {
      this.setState({ months: event.target.value });
    }
  }
  handleSubmit(event) {
    if (
      this.state.months >= 6 &&
      this.state.months <= 24 &&
      this.state.principal >= 500 &&
      this.state.principal <= 5000
    ) {
      this.props.dataEvent(this.state);
    } else {
      alert("Check input");
    }
  }

  handleSubmit = this.handleSubmit.bind(this);
  render() {
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Data Input</h5>
            <b class="card-text">
              <form>
                <input
                  type="text"
                  class="form-control"
                  id="principal"
                  placeholder="Principal Amount ($500 - $5000)"
                  value={this.state.principal}
                  onChange={this.handlePrincipalChange.bind(this)}
                />
                <br />
                <input
                  type="text"
                  class="form-control"
                  id="Months"
                  placeholder="Months ( 6 - 24)"
                  value={this.state.months}
                  onChange={this.handleMonthsChange.bind(this)}
                />
                <br />
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.handleSubmit}
                >
                  Submit
                </button>
              </form>
            </b>
          </div>
        </div>
      </div>
    );
  }
}

export default DataComp;
