import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Pokemon } from '../../../../core/models/pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {
  @Input() pokemon: Pokemon | null = null;
  @Input() loading = false;
  @Input() error: string | null = null;

  ngOnChanges(changes: SimpleChanges): void {
    // Puedes implementar lógica adicional cuando cambian los inputs
  }
}