import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  namePokemon: string = '';
  name: string = '';
  urlImage: string = '';

  constructor(private pokemonService : PokemonService) { }

  ngOnInit(): void {
  }

  search(){
    this.pokemonService.getPokemon(this.name)
      .subscribe((pokemon : any) =>{
        this.urlImage = pokemon.sprites.front_default
        this.namePokemon = pokemon.name;
        console.log(pokemon)
      });
  }

}
