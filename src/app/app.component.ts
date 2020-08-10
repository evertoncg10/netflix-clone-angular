import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  listTitlesRecentes = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 1',
    relevance: 98,
    age: 12,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 2',
    relevance: 78,
    age: 16,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 3',
    relevance: 85,
    age: 18,
    parts: 2,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }];
}
