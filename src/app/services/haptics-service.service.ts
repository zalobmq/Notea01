import { Injectable } from '@angular/core';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

@Injectable({
  providedIn: 'root'
})
export class HapticsServiceService {

  constructor() { }

  async vibrarS(){
    Haptics.vibrate({duration:2000})
  }
}
