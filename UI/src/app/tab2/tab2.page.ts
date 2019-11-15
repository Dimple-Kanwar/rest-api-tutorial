import { Component } from '@angular/core';
import { log } from 'util';
// import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  selectedLanguage:string;
  constructor(
    // private translateConfigService: TranslateConfigService
  ) {}

  register(form) {
    console.log(form);
    console.log(form.value);
    
    
  }
  // languageChanged(){
  //   this.translateConfigService.setLanguage(this.selectedLanguage);
  // }
}
