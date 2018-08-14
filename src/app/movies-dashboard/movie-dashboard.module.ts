import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { MovieDashboardComponent } from './containers/movie-dashboard/movie-dashboard.component';

// Components
import { MovieDetailComponent } from './components/movie-details/movie-detail.component';

// Service
import { MovieDashboardService } from './movie-dashboard.service';

const routes: Routes = [
    {
        path: 'artistmovies/:id',
        component: MovieDashboardComponent
    }
];

@NgModule({
    declarations: [
        MovieDashboardComponent,
        MovieDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        MovieDashboardService
    ],
})
export class MovieDashboardModule {}
