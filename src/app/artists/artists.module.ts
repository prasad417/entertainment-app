import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArtistsComponent } from './artists.component';

@NgModule({
    declarations: [
        ArtistsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ArtistsComponent
    ],
    providers: [],
})

export class ArtistsModule {}
