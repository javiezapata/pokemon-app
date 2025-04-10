import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { PokemonSearchComponent } from './pokemon-search.component';

describe('PokemonSearchComponent', () => {
  let component: PokemonSearchComponent;
  let fixture: ComponentFixture<PokemonSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonSearchComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit searchById event when search by ID is submitted', () => {
    const emitSpy = spyOn(component.searchById, 'emit');
    component.searchType = 'id';
    component.searchForm.patchValue({ searchTerm: '25' });
    
    component.onSubmit();
    
    expect(emitSpy).toHaveBeenCalledWith(25);
  });

  it('should emit searchByName event when search by name is submitted', () => {
    const emitSpy = spyOn(component.searchByName, 'emit');
    component.searchType = 'name';
    component.searchForm.patchValue({ searchTerm: 'pikachu' });
    
    component.onSubmit();
    
    expect(emitSpy).toHaveBeenCalledWith('pikachu');
  });

  it('should change search type and reset form', () => {
    const resetSpy = spyOn(component.searchForm, 'reset');
    component.searchType = 'id';
    component.searchForm.patchValue({ searchTerm: '25' });
    
    component.changeSearchType('name');
    
    expect(component.searchType).toBe('name');
    expect(resetSpy).toHaveBeenCalled();
  });
});