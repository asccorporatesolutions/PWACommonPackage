import React, { Component } from 'react';

import Menu from 'components/Menu';

export default class InitializeApp extends Component {
  render() {
    const { children } = this.props; // eslint-disable-line

    return (
      <div className='InitializeApp'>
        <Menu />
        { children }
      </div>
    );
  }
}
