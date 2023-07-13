import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Item } from '../Item';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showingAddItem: boolean = false;
  private showingEditItem: boolean = false;
  private currentlyEditing = new Subject<Item>();
  private addSubject = new Subject<any>();
  private editSubject = new Subject<any>();

  constructor() { }

  hideAddForms(): void {
    this.showingAddItem = false;
    this.addSubject.next(this.showingAddItem);
  }
  
  hideEditForms(): void {
    this.showingEditItem = false;
    this.editSubject.next(this.showingEditItem);
  }

  showAddItem(): void{
    this.showingAddItem = true;
    this.addSubject.next(this.showingAddItem);
    this.hideEditForms();
  }

  showEditItem(item: Item): void{
    this.currentlyEditing.next(item);
    this.showingEditItem = true;
    this.editSubject.next(this.showingEditItem);
    this.hideAddForms();
  }

  onToggleAddItem(): Observable<any> {
    return this.addSubject.asObservable();
  }

  onToggleEditItem(): Observable<any> {
    return this.editSubject.asObservable();
  }

  onNewItemToEdit(): Observable<Item> {
    return this.currentlyEditing.asObservable();
  }
}