import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent,ResultComponent } from './pages';
import { PostdetailComponent,PostlistComponent } from './components';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {
    path: 'query', component: ResultComponent,
    children:[
      {path : 'list',component: PostlistComponent },
      {path : 'detail/:id', component: PostdetailComponent},
      {path : '**', redirectTo:'list'}
    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
