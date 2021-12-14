import { Component, ViewChild } from '@angular/core';
//import { Camera, CameraResultType, CameraSource, ImageOptions, Photo } from '@capacitor/camera';
import { IonToggle } from '@ionic/angular';
//import { TranslateService } from '@ngx-translate/core';
//import { LocalStorageService } from '../services/local-storage.service';
import { HapticsServiceService } from '../services/haptics-service.service';
//import { GeolocationService } from '../services/geolocation.service';


@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page {
  @ViewChild('mitoogle',{static:false}) mitoogle:IonToggle;
 

  constructor( private vib:HapticsServiceService) {  
  }

    async vibrarXD(){
     this.vib.vibrarS();
    }

     
      
    
  }