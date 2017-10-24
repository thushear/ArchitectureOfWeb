import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
/**
 * Created by kongming on 2017/10/23.
 */

const routes : Routes = [
  {
    path : '',
    loadChildren:'./layout/layout.module#LayoutModule'
  }

];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports : [RouterModule]
})

export class AppRoutingModule{

}
