export interface Contato {
    id: number;
    nomeCompleto: string;
    email: string;
    telefone: string;
  }
  
  export interface AppState {
    Contatos: Contato[];
  }