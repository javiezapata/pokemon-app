import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.scss']
})
export class PokemonSearchComponent {
  @Output() searchById = new EventEmitter<number>();
  @Output() searchByName = new EventEmitter<string>();
  
  searchForm: FormGroup;
  searchType: 'id' | 'name' = 'id';

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      searchTerm: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.searchForm.valid) {
      const term = this.searchForm.get('searchTerm')?.value;
      
      if (this.searchType === 'id') {
        const id = parseInt(term, 10);
        if (!isNaN(id)) {
          this.searchById.emit(id);
        }
      } else {
        this.searchByName.emit(term);
      }
    }
  }

  changeSearchType(type: 'id' | 'name'): void {
    this.searchType = type;
    this.searchForm.reset();
  }
}