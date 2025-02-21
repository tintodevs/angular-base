import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-lista',
  imports: [CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  public heronames: string  []= ['Spiderman','Hulk','Thor','ironman'];
  public deletedhero?:  string;

  removelasthero():void{
    this.deletedhero = this.heronames.pop();
  }

}
