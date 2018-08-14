import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { LanguageDashboardComponent } from './containers/language-dashboard/language-dashboard.component';

// Components
import { LanguageDetailComponent } from './components/language-details/language-detail.component';

// Service
import { LanguageDashboardService } from './language-dashboard.service';

const routes: Routes = [
    {
        path: 'movies',
        component: LanguageDashboardComponent
    },
    {
        path: 'music',
        component: LanguageDashboardComponent
    },
    {
        path: 'videos',
        component: LanguageDashboardComponent
    },
];

@NgModule({
    declarations: [
        LanguageDashboardComponent,
        LanguageDetailComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule.forRoot(routes)
    ],
    providers: [
        LanguageDashboardService
    ],
})
export class LanguageDashboardModule {}
