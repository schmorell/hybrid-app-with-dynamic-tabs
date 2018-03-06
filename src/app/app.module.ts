import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { DynamicTabsDirective } from './dynamic-tabs.directive';


@NgModule({
  declarations: [
    AppComponent,
    PersonEditComponent,
    PeopleListComponent,
    TabComponent,
    TabsComponent,
    DynamicTabsDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ TabComponent ]
})
export class AppModule { }
