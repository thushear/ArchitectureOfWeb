/**
 * Created by kongming on 2017/10/23.
 */
/**
 * Created by kongming on 2017/10/23.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {GridComponent} from "./grid.component";


/**
 * Created by kongming on 2017/10/23.
 */

const routes : Routes = [
  {
    path : '',component: GridComponent

  }

];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class GridRoutingModule{

}
