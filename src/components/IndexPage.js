'use strict';

import React from 'react';
import fetch from 'isomorphic-fetch'
import Tiles from './Tiles'
import Filter from './Filter'

export default class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      apiUrl: "https://api.spaceXdata.com/v3/launches?limit=100",
      data: [],
      launch_year: "",
      launch_success: '',
      land_success: ''
    }
    this.getList(this.state.apiUrl);
    this.fetchFilteredData = this.fetchFilteredData.bind(this)
  }
  createUrl() {
    let url = this.state.apiUrl;
    if (this.state.launch_success != "") url = url + "&launch_success=" + this.state.launch_success;
    if (this.state.land_success != "") url = url + "&land_success=" + this.state.land_success;
    if (this.state.launch_year != "") url = url + "&launch_year=" + this.state.launch_year;
    this.getList(url);
  }
  fetchFilteredData(key, val) {
    let value = val
    if (key == "launch_year") {
      value = val.d
    }
    var obj = {}
    if (this.state[key] == value) {
      obj[key] = ""
    } else {
      obj[key] = value
    }
    this.setState(obj, () => {
      this.createUrl()
    });

  }
  getList(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => { this.setState({ data }) })
  }

  render() {
    const { data } = this.state;
    const allData = data
    return (
      <div className="row">
        <div className="side">
          <Filter fetchFilteredData={this.fetchFilteredData} {...this.state}></Filter>
        </div>
        <div className="main">
          <div className="mainInner">
            {
              allData.length == 0 && (
                <div className="noData">No Data Found</div>
              )
            }
            {
              allData.map((d, i) => {
                return (
                  <Tiles key={i} details={d}></Tiles>
                )
              })
            }
          </div>
        </div>
      </div>
    );

  }
}
