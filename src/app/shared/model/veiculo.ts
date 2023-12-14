import { Cliente } from "./cliente";

export class Veiculo{
  id: number;
  cliente: Cliente;
  marca: string;
  modelo: string;
  anoModelo: Date;
  combustivel: string;
  valor: number;
  placaVeiculo: string;
}
