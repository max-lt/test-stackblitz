import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage } from './pages/main/main.component';
import { SecondPage } from './pages/second/second.component';
import { ThirdPage } from './pages/third/third.component';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  {
    path: 'second',
    component: SecondPage,
  },
  {
    path: 'third',
    component: ThirdPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class RoutingModule {}
