import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }


  // @PostMapping
  public saveVideo = (_url:string, data:any, httpOptions:any) => {
    return this.http.post(_url, data, httpOptions);
  }

  // @GetMapping("/{name}")
  public getVideoByName = (_url:string) => {
    return this.http.get(_url);
  }

  // @GetMapping("/names")
  public getAllVideoNames = (_url:string) => {
    return this.http.get(_url); 
  }
}
