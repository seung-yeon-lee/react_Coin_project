import React, { Component } from 'react';
import '../src/sass/materialize.scss';
import PhoneForm from './components/1.Todo/PhoneForm';
import PhoneInfoList from './components/1.Todo/PhoneInfoList';

class App extends Component {
  id = 2;
  state = {
    information: [
      {
        id: 0,
        name: 'HTML/CSS',
        phone: '010-0000-0000',
      },
      {
        id: 1,
        name: 'JavaScript',
        phone: '010-1111-1111',
      },
    ],
  };
  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data }),
    });
  };
  handleRemove = id => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id),
    });
  };
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      infomation: information.map(info => (id === info.id ? { ...info, ...data } : info)),
    });
  };
  render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          data={information}
          onUpdate={this.handleUpdate}
          onRemove={this.handleRemove}
        />
      </div>
    );
  }
}

export default App;
