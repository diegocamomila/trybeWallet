import React from 'react';
import Form from '../componets/Form';
import Header from '../componets/Header';
import Table from '../componets/Table';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        TrybeWallet
        <Header />
        <Form />
        <Table />
      </div>
    );
  }
}

export default Wallet;
