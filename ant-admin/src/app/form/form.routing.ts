/**
 * Created by kongming on 2017/10/23.
 */
/**
 * Created by kongming on 2017/10/23.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FormComponent} from "./form.component";

/**
 * Created by kongming on 2017/10/23.
 */

const routes : Routes = [
  {
    path : '',component: FormComponent

  }

];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class FormRoutingModule{

}
