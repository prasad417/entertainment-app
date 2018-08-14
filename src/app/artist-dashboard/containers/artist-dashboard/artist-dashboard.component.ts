import { Component, OnInit } from '@angular/core';

import { Artist } from './../../models/artist.interface';

import { ArtistDashboardService } from '../../artist-dashboard.service';
import { error } from '@angular/compiler/src/util';

@Component({
  selector: 'app-artist-dashboard',
  templateUrl: './../artist-dashboard/artist-dashboard.component.html',
  styleUrls: ['./../artist-dashboard/artist-dashboard.component.scss']
})
export class ArtistDashboardComponent implements OnInit {
  artists: Artist[];

  public errorMsg;

  constructor(private artistService: ArtistDashboardService) { }

  ngOnInit() {
    this.artistService
      .getArtists()
      .subscribe((data: Artist[]) => this.artists = data );
      // (error: any) => this.errorMsg = error);
  }

}
