import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

export class Seguro{
  id: number;
  cliente: Cliente;
  veiculo: Veiculo;
  numeroProposta: string;
  dtInicioVigencia: Date;
  dtFimVigencia: Date;
  rcfDanosMateriais: number;
  rcfDanosCorporais: number;
  franquia: string;
  assistencia: string;
  carroReserva: string;
}
