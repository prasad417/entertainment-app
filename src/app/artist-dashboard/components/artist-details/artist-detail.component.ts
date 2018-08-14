import { Component, OnInit, Input } from '@angular/core';

import { Artist } from '../../models/artist.interface';

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.scss']
})
export class ArtistDetailComponent implements OnInit {
  @Input()
  detail: Artist;
  constructor() { }

  ngOnInit() {}

}
