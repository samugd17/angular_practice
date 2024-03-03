import { Component, inject } from '@angular/core';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-housing-location *ngFor="let housingLocation of housingLocationList"
    [housingLocation]="housingLocation"></app-housing-location>
  </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
  readonly imgUrl = 'https://angular.io/assets/images/tutorials/faa';

  // housingLocation: HousingLocation = {
  //   id: 9999,
  //   name: 'Test Home',
  //   city: 'Test city',
  //   state: 'ST',
  //   photo: `${this.imgUrl}/example-house.jpg`,
  //   availableUnits: 99,
  //   wifi: true,
  //   laundry: false,
  // };

  housingLocationList: HousingLocation[] = [];
  HousingService: HousingService = inject(HousingService)

  constructor() {
    this.housingLocationList = this.HousingService.getAllHousingLocations();
  }
}
