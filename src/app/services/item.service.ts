import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../Item';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiUrl = 'http://localhost:5000/items';

  constructor(private http:HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiUrl);
  }

  deleteItem(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.delete<Item>(url);
  }

  updateItemMissing(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }

  editItem(item: Item): Observable<Item> {
    const url = `${this.apiUrl}/${item.id}`;
    return this.http.put<Item>(url, item, httpOptions);
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiUrl, item, httpOptions);
  }
}