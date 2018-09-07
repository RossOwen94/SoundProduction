import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs';
import  { map } from 'rxjs/operators';
import { Sample } from './samples/samples.component';


@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(public http: Http) { }


  getSamples(): Observable<Sample[]>{
    return this.http.get('https://gideonsystems.net/samples/list')
    .pipe(map((res) => res.json()));
  }

}
