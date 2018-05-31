
import React, { Component } from 'react';
import UsersApp from './Consumers/UsersApp';
import ProviderApp from './Providers/ProviderApp';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ProviderApp />
    );
  }
}


