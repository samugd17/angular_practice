import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingLocationComponent } from './housing-location.component';

describe('HousingLocationComponent', () => {
  let component: HousingLocationComponent;
  let fixture: ComponentFixture<HousingLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HousingLocationComponent] // Importaciones necesarias para el componente
    })
    .compileComponents(); // Compila los componentes del módulo de prueba
  
    fixture = TestBed.createComponent(HousingLocationComponent); // Crea una instancia del componente
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios iniciales en el componente
  });
  

  it('should create', () => {
    expect(component).toBeTruthy(); // Verifica si el componente se crea correctamente
  });  
});
