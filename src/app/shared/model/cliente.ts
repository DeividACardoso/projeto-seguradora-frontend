import { endereco } from './endereco';

export class Cliente{
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  telefone: string;
  endereco: endereco;
}
