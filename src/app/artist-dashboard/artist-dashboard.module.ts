import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { ArtistDashboardComponent } from './containers/artist-dashboard/artist-dashboard.component';

// Components
import { ArtistDetailComponent } from './components/artist-details/artist-detail.component';

// Service
import { ArtistDashboardService } from './artist-dashboard.service';

const routes: Routes = [
    {
        path: 'artists/:id',
        component: ArtistDashboardComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    declarations: [
        ArtistDashboardComponent,
        ArtistDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        ArtistDashboardService
    ],
})
export class ArtistDashboardModule {}
