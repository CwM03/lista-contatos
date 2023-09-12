import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppState, Contato } from '../types/types';
import { deleteContato, editContato } from '../reducers/contactReducer';

const ContactList: React.FC = () => {
  const contatos = useSelector((state: AppState) => state.Contatos);
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState<number | null>(null); // Para rastrear o modo de edição
  const [formData, setFormData] = useState<Contato>({
    id: 0,
    nomeCompleto: '',
    email: '',
    telefone: '',
  });

  const handleDelete = (id: number) => {
    dispatch(deleteContato(id));
  };

  const handleEdit = (contact: Contato) => {
    setEditMode(contact.id);
    setFormData(contact);
  };

  const handleSaveEdit = () => {
    dispatch(editContato(formData));
    setEditMode(null);
    setFormData({ id: 0, nomeCompleto: '', email: '', telefone: '' });
  };

  return (
    <div>
      <ul>
        {contatos.map((contact: Contato) => (
          <li key={contact.id}>
            {editMode === contact.id ? (
              <div>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  value={formData.nomeCompleto}
                  onChange={(e) =>
                    setFormData({ ...formData, nomeCompleto: e.target.value })
                  }
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                />
                <input
                  type="text"
                  placeholder="Telefone"
                  value={formData.telefone}
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                  required
                />
                <button onClick={handleSaveEdit}>Salvar</button>
              </div>
            ) : (
              <div>
                {contact.nomeCompleto} - {contact.email} - {contact.telefone}
                <button onClick={() => handleDelete(contact.id)}>Remover</button>
                <button onClick={() => handleEdit(contact)}>Editar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
