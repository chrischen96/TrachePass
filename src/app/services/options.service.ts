import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionsService {

  constructor() { }
  public cricoidOptions = ["3.6-4.8", "4.8-5.8", "5.8-6.5", "6.5-7.4", "7.4-8.2", "10.7"]
  public tracheOptions = ["5", "5-6", "6-7", "7-8", "8-9", "9-10", "10-13", "13"]
  public type1Level2Options = {2.5: {ID: "3.5", OD: "4.2"},
                              3.0: {ID: "4.3", OD: "5.0"},
                              3.5: {ID: "5.0", OD: "5.7"},
                              4.0: {ID: "6.0", OD: "6.7"},
                              4.5: {ID: "6.6", OD: "7.3"},
                              5.0: {ID: "7.1", OD: "7.6"},
                              6.0: {ID: "7.1", OD: "7.5"},}
  public tubeOptions = {}

}
