import React, { Component } from 'react';
// import loading from '/loading3.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={process.env.PUBLIC_URL + '/loading3.gif'} alt="loading" />
      </div>
    )
  }
}

export default Spinner;
