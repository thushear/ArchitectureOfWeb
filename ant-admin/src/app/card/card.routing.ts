/**
 * Created by kongming on 2017/10/23.
 */
/**
 * Created by kongming on 2017/10/23.
 */
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CardComponent} from "./card.component";

/**
 * Created by kongming on 2017/10/23.
 */

const routes : Routes = [
  {
    path : '',component: CardComponent

  }

];

@NgModule({
  imports : [RouterModule.forChild(routes)],
  exports : [RouterModule]
})

export class CardRoutingModule{

}
