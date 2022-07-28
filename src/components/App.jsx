import React, { Component } from 'react';
import Form from './Form/index';
import ContactList from './ContactList';
import Container from './Container';
import SearchForm from './SearchForm';

// const uId = nanoid();

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
componentDidUpdate(prevProps,prevState){
  if(this.state.contacts !== prevState.contacts){
  
    localStorage.setItem('contacts',JSON.stringify(this.state.contacts))}
}
componentDidMount(){
  const contacts =localStorage.getItem('contacts')
  const parsedContacts = JSON.parse(contacts)
  this.setState({contacts:parsedContacts})
}
  addContact = contact => {
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleEl = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(e =>
      e.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteEl = elem => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(e => e.uId !== elem),
    }));
  };

  render() {
    const { contacts } = this.state;
    const visibleEl = this.getVisibleEl();

    return (
      <div>
        <Container>
          <h1>Phonebook</h1>
          <Form addContact={this.addContact} arrayContact={contacts} />

          <h2>Contacts</h2>
          <SearchForm onChange={this.changeFilter} />
          <ContactList contactArrey={visibleEl} onDeleteEl={this.deleteEl} />
        </Container>
      </div>
    );
  }
}

export default App;
