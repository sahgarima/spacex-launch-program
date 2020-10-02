import PropTypes from 'prop-types';
import React, { Component } from 'react';
// import styles from './Tiles.scss';
// import "./tiles.css";

export default class Tiles extends Component {



  render() {
    const { details } = this.props;
    return (
      <div className="tileBox">
      <div className="innerBox">
        <img src={details.links.mission_patch_small} />
        <p className="titleColor"><strong>{details.mission_name} #{details.flight_number}</strong></p>
        <p><strong>Mission Ids:</strong>
        {
          details.mission_id.length == 0 && (
            <span className="valColor"> NA</span>
          )
        }
        </p>
        <ul>
          {details.mission_id.map((d, i) => {
            return (<li key={i} ><span className="valColor">{d}</span></li>)
          })}
        </ul>
        <p><strong>Launch Year:</strong> <span className="valColor">{details.launch_year}</span></p>
        <p><strong>Successfull Launch:</strong> <span className="valColor">{details.launch_success?"True":"False"}</span></p>
        {/* <p><strong>Successfull Landing:</strong> <span className="valColor">{details.launch_landing?"True":"False"}</span></p> */}

        <p><strong>Successfull Landing:</strong> <span className="valColor">NA</span></p>
      </div>
      </div>
    );
  }
}
