/**
 * Created by kongming on 2017/10/23.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./layout.component";
/**
 * Created by kongming on 2017/10/23.
 */

const routes : Routes = [
  {
    path : '',component: LayoutComponent,
    children:[
      {path:'table',loadChildren:'./../table/table.module#TableModule'
      },
      {
        path:'card',loadChildren:'./../card/card.module#CardModule'
      },
      {
        path:'form',loadChildren:'./../form/form.module#FormModule'
      }
    ]
  }

];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class LayoutRoutingModule{

}
