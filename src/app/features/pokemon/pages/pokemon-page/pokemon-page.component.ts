import { Component } from '@angular/core';
import { PokemonService } from '../../../../core/services/pokemon.service';
import { Pokemon } from '../../../../core/models/pokemon.model';
import { finalize, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent {
  pokemon: Pokemon | null = null;
  loading = false;
  error: string | null = null;
  currentId = 0;

  constructor(private pokemonService: PokemonService) {}

  searchPokemonById(id: number): void {
    this.loading = true;
    this.error = null;
    this.currentId = id;
    
    this.pokemonService.getPokemonById(id)
      .pipe(
        catchError(error => {
          this.error = `No se encontró el Pokémon con ID: ${id}`;
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(pokemon => {
        if (pokemon) {
          this.pokemon = pokemon;
        }
      });
  }

  searchPokemonByName(name: string): void {
    this.loading = true;
    this.error = null;
    
    this.pokemonService.getPokemonByName(name)
      .pipe(
        catchError(error => {
          this.error = `No se encontró el Pokémon con nombre: ${name}`;
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(pokemon => {
        if (pokemon) {
          this.pokemon = pokemon;
          this.currentId = pokemon.id;
        }
      });
  }

  previousPokemon(): void {
    if (this.currentId > 1) {
      this.searchPokemonById(this.currentId - 1);
    }
  }

  nextPokemon(): void {
    this.searchPokemonById(this.currentId + 1);
  }
}