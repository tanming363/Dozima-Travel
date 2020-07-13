import { Component, OnInit } from '@angular/core';
import { TravelDetailsService } from '../services/travel-details.service';
import { Details } from '../models/detail.model';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  allDetails!: Details[];

  constructor(private travelService: TravelDetailsService) { }

  ngOnInit(): void {
    this.getAllDetails()
  }

  getAllDetails() {
    this.travelService.getDetails().subscribe(
      (data: Details[]) => {
        this.allDetails = data;
      })
  }
}
