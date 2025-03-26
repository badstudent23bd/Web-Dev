import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from './album'
import {Photo} from './photo';

@Injectable({
  providedIn: 'root'
})

export class AlbumfetchService {

  constructor(private client: HttpClient) { }

  getAlbums() : Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number) : Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  getPhotos(id: number): Observable<Photo[]> {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

  addAlbum(title: string): Observable<Album> {
    console.log("Adding album with title " + title);
    return this.client.post<Album>('https://jsonplaceholder.typicode.com/albums', {title: title});
  }

  setAlbumTitle(id: number, title: string): Observable<Album> {
    console.log("Setting album title to " + title);
    return this.client.patch<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, {title: title});
  }

  deleteAlbum(id: number): Observable<any> {
    console.log("Delete album with id " + id);
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
