import { Component } from '@angular/core';
import { log } from 'util';
import { TranslateConfigService } from '../translate-config.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  selectedLanguage:string;
  constructor(private translateConfigService: TranslateConfigService,private route:Router) {}

  login(form){
    console.log(form);
    console.log(form.value);
    if(form.value.role=='farmer'){
      this.route.navigateByUrl('farmer');
    }
    
    else{
      this.route.navigateByUrl('verify-officer');
    }
    
  }
  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }
}
