import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root'
})

export class RoomService {

  private url = 'http://localhost:4000/api/room/';

  constructor(private http: HttpClient) { }

  createCodeNumber(room: Room): Observable<any> {
    return this.http.post(this.url, room);
  }

  getCodeNumber(codeNumber: string): Observable<any> {
    return this.http.get(this.url + codeNumber);
  }

  deleteRoom(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

}