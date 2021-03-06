import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UpgradeModule, downgradeComponent } from '@angular/upgrade/static';

import { AppComponent } from './app.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { DynamicTabsDirective } from './dynamic-tabs.directive';
import { HeavyStuffComponent } from './heavy-stuff/heavy-stuff.component';


@NgModule({
  declarations: [
    AppComponent,
    PersonEditComponent,
    PeopleListComponent,
    TabComponent,
    TabsComponent,
    DynamicTabsDirective,
    HeavyStuffComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    UpgradeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ TabComponent ]
})
export class AppModule {
  // constructor(private upgrade: UpgradeModule) { }
  // ngDoBootstrap() {
  //   this.upgrade.bootstrap(document.body, ['app'], { strictDi: true });
  // }
}
