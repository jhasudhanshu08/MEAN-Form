import { Injectable } from '@angular/core';
import { Model } from './model';

@Injectable({
  providedIn: 'root'
})
export class ModelServiceService {

  selectModel: Model = {
    device_id: "",
    isActice!: "",
    information!: {
        name: "",
        type: "",
        capacity: {
            ac: "",
            dc: "",
        },
        serialNo: "",
        location: "",
        manufacture: "",
        model: "",
        deviceType: "",
        parsingVersion: "",
        description: ""
  }
};

  constructor() { }
}
