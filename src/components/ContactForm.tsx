import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addContato, editContato } from '../reducers/contactReducer';
import { Contato } from '../types/types';

interface ContactFormProps {
  contact?: Contato;
}

const ContactForm: React.FC<ContactFormProps> = ({ contact }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<Contato>({
    id: Date.now(),
    nomeCompleto: '',
    email: '',
    telefone: '',
  });

  useEffect(() => {
    if (contact) {
      setFormData(contact);
    }
  }, [contact]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (contact) {
      dispatch(editContato(formData));
    } else {
      dispatch(addContato(formData));
    }

    setFormData({ id: Date.now(), nomeCompleto: '', email: '', telefone: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome Completo"
        name="nomeCompleto"
        value={formData.nomeCompleto}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        placeholder="Telefone"
        name="telefone"
        value={formData.telefone}
        onChange={handleChange}
        required
      />
      <button type="submit">{contact ? 'Editar' : 'Adicionar'}</button>
    </form>
  );
};

export default ContactForm;
