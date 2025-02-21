import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-hero',
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age : number = 40;

  get capitalizarnom():string{
    return this.name.toUpperCase();
  }
  getHeroDescripcion():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
    this.name = 'Thor';
  }

  changeAge(): void{
    this.age = 25;
  }

  resetform():void{
    this.name = 'ironman';
    this.age = 40;
  }
}

