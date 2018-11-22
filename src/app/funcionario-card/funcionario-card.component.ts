import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {

  @Input() funcionario: any;

  getEstiloCartao(){
    return{
      backgroundColor : this.funcionario.id % 2 === 0 ? 'lightblue' : 'lightgreen' ,
      borderWidth : this.funcionario.id  + 'px'
    }
  }

  isAdmin() {
    return this.funcionario.nome.startsWith('L');
  }
 
}
