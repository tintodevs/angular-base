import { Component,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListaComponent } from "./heroes/lista/lista.component";
import { CommonModule } from '@angular/common';
import { AlonepageComponent } from './contador/pages/alonepage/alonepage.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroComponent, ListaComponent,CommonModule,AlonepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true,
})
export class AppComponent{

  public title: string = 'Mi primera chamba :)';

}



