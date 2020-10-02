
import React, { Component } from 'react';

export default class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            years :[2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,2020]
        }
    }
  
    render() {
        return (
            <div className="filterBox">
                <p className="topTitle"><strong>Filter</strong></p>
                <p className="title topTitle">Launch Year</p>
                 <div className="filterRow">
                {
                    this.state.years.map((d,i) => {
                        return (
                                <div className="filterCol" key={i}><button className={this.props.launch_year == d?"active":''} onClick={() => this.props.fetchFilteredData("launch_year",{d})}>{d}</button></div>
                        )
                    })
                }
                </div>
                <p className="title topTitle">Successfull launch</p>
                <div className="filterRow">
                    <div className="filterCol"><button className={this.props.launch_success == "true"?"active":''} onClick={() => this.props.fetchFilteredData("launch_success","true")}>True</button></div>
                    <div className="filterCol"><button className={this.props.launch_success == "false"?"active":''} onClick={() => this.props.fetchFilteredData("launch_success","false")}>False</button></div>
                </div>
                <p className="title topTitle">Successfull Landing</p>
                <div className="filterRow">
                    <div className="filterCol"><button className={this.props.land_success == "true"?"active":''} onClick={() => this.props.fetchFilteredData("land_success","true")}>True</button></div>
                    <div className="filterCol"><button className={this.props.land_success == "false"?"active":''} onClick={() => this.props.fetchFilteredData("land_success","false")}>False</button></div>
                </div>
            </div>
        );
    }
}
