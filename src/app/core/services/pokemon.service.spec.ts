import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PokemonService } from './pokemon.service';
import { Pokemon } from '../models/pokemon.model';

describe('PokemonService', () => {
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokemonService]
    });
    service = TestBed.inject(PokemonService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Pokemon by ID', () => {
    const mockPokemon: Pokemon = {
      id: 25,
      name: 'pikachu',
      types: ['electric'],
      abilities: ['static', 'lightning-rod'],
      sprite_url: 'https://example.com/pikachu.png'
    };

    service.getPokemonById(25).subscribe(pokemon => {
      expect(pokemon).toEqual(mockPokemon);
    });

    const req = httpMock.expectOne('http://localhost:3000/pokemon/25');
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemon);
  });

  it('should get Pokemon by name', () => {
    const mockPokemon: Pokemon = {
      id: 25,
      name: 'pikachu',
      types: ['electric'],
      abilities: ['static', 'lightning-rod'],
      sprite_url: 'https://example.com/pikachu.png'
    };

    service.getPokemonByName('pikachu').subscribe(pokemon => {
      expect(pokemon).toEqual(mockPokemon);
    });

    const req = httpMock.expectOne('http://localhost:3000/pokemon/pikachu');
    expect(req.request.method).toBe('GET');
    req.flush(mockPokemon);
  });
});