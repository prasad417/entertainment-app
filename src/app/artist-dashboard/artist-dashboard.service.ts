import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Artist } from './models/artist.interface';

const Artists_API: string = environment.apiUrl;

@Injectable()
export class ArtistDashboardService {
    constructor(private http: HttpClient) {}

    getArtists(): Observable<Artist[]> {
        return this.http
            .get<Artist[]>(`${Artists_API}/artists`)
            .pipe(
                map((response: Response) => response),
                catchError(this.errorHandler)
            );
    }

      errorHandler(error: HttpErrorResponse) {
          return Observable.throw(error.message || 'Server Error');
      }
}
