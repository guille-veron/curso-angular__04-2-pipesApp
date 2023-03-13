import { NgModule } from '@angular/core';

//PrimeNg
import {ButtonModule} from 'primeng-lts/button';
import {CardModule} from 'primeng-lts/card';
import {MenubarModule} from 'primeng-lts/menubar';
import {FieldsetModule} from 'primeng-lts/fieldset';
import {ToolbarModule} from 'primeng-lts/toolbar';
import {TableModule} from 'primeng-lts/table';



@NgModule({
  declarations: [], 
  exports:[
    ButtonModule,
    CardModule,
    MenubarModule,
    FieldsetModule,
    ToolbarModule,
    TableModule
  ]
})
export class PrimeNgModule { }
