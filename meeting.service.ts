import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Meeting } from './meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  private apiURL = "https://jsonplaceholder.typicode.com";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Meeting[]> {
    return this.httpClient.get<Meeting[]>(this.apiURL + '/posts/')
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(post): Observable<Meeting> {
    return this.httpClient.post<Meeting>(this.apiURL + '/posts/', JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id): Observable<Meeting> {
    return this.httpClient.get<Meeting>(this.apiURL + '/posts/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(id, post): Observable<Meeting> {
    return this.httpClient.put<Meeting>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id){
    return this.httpClient.delete<Meeting>(this.apiURL + '/posts/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
    
  
  errorHandler(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
