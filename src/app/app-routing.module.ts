import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
    { path: '', component: PlayerComponent, pathMatch: 'full' },
    { path: 'players', component: PlayerComponent, children: [
            { path: ':id/:name', component: PlayerDetailComponent }
        ]
    },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }