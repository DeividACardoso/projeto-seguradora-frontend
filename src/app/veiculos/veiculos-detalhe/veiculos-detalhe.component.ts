import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/shared/model/veiculo';
import { VeiculoService } from 'src/app/shared/service/veiculo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-veiculos-detalhe',
  templateUrl: './veiculos-detalhe.component.html',
  styleUrls: ['./veiculos-detalhe.component.scss']
})
export class VeiculosDetalheComponent {
  veiculo:Veiculo = new Veiculo();
  public idVeiculo: number;

  @ViewChild('ngForm')
  public ngForm: NgForm;

  constructor(private veiculoService : VeiculoService,
    private router: Router,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.idVeiculo = params['id'];

        if(this.idVeiculo){
          this.buscarVeiculo();
        }
      });
    }

  voltar(){
    this.router.navigate(['/veiculos/lista'])
  }

  buscarVeiculo() {
    this.veiculoService.pesquisarPorId(this.idVeiculo).subscribe(
      resultado =>{
        this.veiculo = resultado;
      },
      erro =>{
        Swal.fire('Erro', 'Erro ao buscar veículo com ID (' + this.idVeiculo + ') : ', 'error');
        return;
      }
    )
  }

  salvar(form: NgForm){
    if(form.invalid){
      Swal.fire("Erro", "Formulário inválido", 'error');
    }

    if(this.idVeiculo){
      this.atualizar();
    } else {
      this.inserirVeiculo();
    }
  }

  inserirVeiculo() {
    this.veiculoService.salvar(this.veiculo).subscribe(
      sucesso => {
        Swal.fire("Sucesso", "Veículo salvo com sucesso", 'success');
        this.veiculo = new Veiculo();
      },
      erro => {
        Swal.fire("Erro", "Não foi possivel salvar o veículo: " + erro.error.message, 'error');
      }
    )
  }

  atualizar() {
    this.veiculoService.atualizar(this.veiculo).subscribe(
      sucesso => {
        Swal.fire("Sucesso", "Veículo Atualizado com Sucesso!", 'success');
      },
      erro => {
        Swal.fire("Erro", "Não foi possivel atualizar o veículo", 'error');
      }
    )
  }
}
