/**
 * Created by kongming on 2017/10/23.
 */
/**
 * Created by kongming on 2017/10/23.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {ChangeDetectorModule} from "./change-detector.module";
import {ChangeDetectorComponent} from "./change-detector.component";

/**
 * Created by kongming on 2017/10/23.
 */

const routes : Routes = [
  {
    path : '',component: ChangeDetectorComponent

  }

];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class ChangeDetectorRoutingModule{

}
