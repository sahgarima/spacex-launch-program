'use strict';

import React from 'react';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="header "> <h2>SpaceX Launch Programs</h2></div>
       
        <div className="app-content">{this.props.children}</div>
        <footer>
         <div className="footer topTitle"><strong>Developed by</strong> : Garima Sah</div>
        </footer>
      </div>
    );
  }
}
