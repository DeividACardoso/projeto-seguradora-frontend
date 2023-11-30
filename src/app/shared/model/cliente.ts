import { Endereco } from './endereco';

export class Cliente{
  id: number;
  nome: string;
  cpf: string;
  dataNascimento: Date;
  telefone: string;
  endereco: Endereco;
}
