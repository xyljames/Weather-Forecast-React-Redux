import React, { Component } from "react";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {fetchWeather} from '../actions/index'

 class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };


    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }
  onInputChange=(e)=>{
    var output=e.target.value;
    console.log(output)
    this.setState({
      term:output
    })
  }

  onFormSubmit=(e)=>{
    e.preventDefault();
    this.props.fetchWeather(this.state.term)
    this.setState({term:''})

  }
  //   state = {};
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input placeholder="Get a five day weather forecast in your city, search by city name"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}

function  mapDispatchToProps (dispatch){
  return bindActionCreators({
    fetchWeather
  },dispatch)
}
export default connect(null,mapDispatchToProps)(SearchBar);