import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: '', component: HelloComponent },
  { path: 'test', component: TestComponent },
  { path: '', component: TestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
