import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/cliente';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  private cliente:Cliente = new Cliente;
  private confirmSenha

  constructor(private dados: DadosService) { }

  ngOnInit() {
  }

  async registraCadastro(){
    await this.dados.addDados(this.cliente).subscribe(
      result=>{
          console.log('gravado com sucesso');
      },
        error => {
          console.error();
      }
    )
  }
}