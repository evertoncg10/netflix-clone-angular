import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuOpened = false;

  listTitlesRecentes = [{
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 1',
    relevance: 98,
    age: 12,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }, {
    trailer: 'assets/videos/capitao_america_guerra_civil_1080p.mp4',
    cover: 'assets/images/capitao-america-guerra-civil.jpg',
    name: 'Capitão América - Guerra Civil',
    relevance: 90,
    age: 16,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Super herói']
  }, {
    trailer: 'assets/videos/Iron_Man_2.mp4',
    cover: 'assets/images/homem-de-ferro-2.jpg',
    name: 'Homem de Ferro 2',
    relevance: 81,
    age: 16,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Super herói']
  }, {
    trailer: 'assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
    cover: 'assets/images/capitao-america-o-primeiro-vingador.jpg',
    name: 'Capitão América - O primeiro vingador',
    relevance: 75,
    age: 16,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Super herói']
  }];

  listTitlesEmAlta = [{
    trailer: 'assets/videos/homem_de_ferro_3_trailer_oficial_1080p.mp4',
    cover: 'assets/images/homem-de-ferro-3.jpg',
    name: 'Homem de ferro 3',
    relevance: 91,
    age: 14,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Super herói']
  }, {
    trailer: 'assets/videos/trailer_guardioes_da_galaxia_1080p.mp4',
    cover: 'assets/images/guardios-da-galaxia.jpg',
    name: 'Guardiões da Galaxia 1',
    relevance: 98,
    age: 12,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Viagem no espaço']
  }, {
    trailer: 'assets/videos/capitao_america_o_primeiro_vingador_trailer__360p.mp4',
    cover: 'assets/images/capitao-america-o-primeiro-vingador.jpg',
    name: 'Capitão América - O primeiro vingador',
    relevance: 75,
    age: 16,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Super herói']
  }, {
    trailer: 'assets/videos/Iron_Man_2.mp4',
    cover: 'assets/images/homem-de-ferro-2.jpg',
    name: 'Homem de Ferro 2',
    relevance: 81,
    age: 16,
    parts: 0,
    categories: ['Épico', 'Filme de fantasia', 'Super herói']
  }];

  setMenuState(state: boolean) {
    this.menuOpened = state;
  }

  closeMenu() {
    this.menuOpened = false;
  }
}
