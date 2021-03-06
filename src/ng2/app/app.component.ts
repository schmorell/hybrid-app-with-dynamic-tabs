import {Component, ViewChild } from '@angular/core';
import { UpgradeModule } from "@angular/upgrade/static";

import {TabsComponent} from './tabs/tabs.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('personEdit') editPersonTemplate;
  @ViewChild('about') aboutTemplate;
  @ViewChild(TabsComponent) tabsComponent;
  
  people = [
    {
      id: 1,
      name: 'Juri',
      surname: 'Strumpflohner',
      twitter: '@juristr'
    }
  ];

  constructor(private upgrade: UpgradeModule) { }

  ngOnInit() {
    this.upgrade.bootstrap(document.body, ['app']);
  }  
  
  onEditPerson(person) {
    this.tabsComponent.openTab(
      `Editing ${person.name}`, 
      this.editPersonTemplate, 
      person,
      true
    );
  }
  
  onAddPerson() {
    this.tabsComponent.openTab(
      'New Person',
      this.editPersonTemplate, 
      {},
      true
    );
  }
  
  onPersonFormSubmit(dataModel) {
    if(dataModel.id > 0) {
      this.people = this.people.map(person => {
        if(person.id === dataModel.id) {
          return dataModel;
        } else {
          return person;
        }
      });  
    } else {
      // create a new one
      dataModel.id = Math.round(Math.random()*100);
      this.people.push(dataModel);
    }
    
    // close the tab
    this.tabsComponent.closeActiveTab();
  }
  
  onOpenAbout() {
    this.tabsComponent.openTab(
      'About',
      this.aboutTemplate, 
      {},
      true
    );
  }
}
