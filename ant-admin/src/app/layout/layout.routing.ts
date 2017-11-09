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
      },
      {
        path:'change-detector',loadChildren:'./../change-detector/change-detector.module#ChangeDetectorModule'
      },
      {
        path:'echart',loadChildren:'./../echart/echart.module#EchartModule'
      },
      {
        path:'grid',loadChildren:'./../grid/grid.module#GridModule'
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
