import React from 'react';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

const App: React.FC = () => {
  return (
    <div>
      <h1>Lista de Contatos</h1>
      <ContactList />
      <h2>Adicionar/Editar Contato</h2>
      <ContactForm />
    </div>
  );
};

export default App;