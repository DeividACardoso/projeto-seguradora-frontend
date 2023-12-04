import { Cliente } from "./cliente";
import { Veiculo } from "./veiculo";

export class Seguro{
  private id: number;
  private cliente: Cliente;
  private veiculo: Veiculo;
  private numeroProposta: string;
  private dtInicioVigencia: Date;
  private dtFimVigencia: Date;
  private rcfDanosMateriais: number;
  private rcfDanosCorporais: number;
  private franquia: string;
  private assistencia: string;
  private carroReserva: string;
}
