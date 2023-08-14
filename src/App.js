import { Component } from 'react';
import MessagesContainer from './containers/MessagesContainer/MessagesContainer';
import Landing from './containers/Landing/Landing';
import './App.scss';

class App extends Component {
  state = {
    firstName: '',
    lastName:'',
    image: '',
    isInstantiated: false
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ isInstantiated: true })
  }

  render() {
    return (
      <div className='app'>
        {
        this.state.isInstantiated 
        ? <MessagesContainer user={this.state}/> 
        : <Landing 
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            image={this.state.image}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />
        }
      </div>
    );
  }
}

export default App;
