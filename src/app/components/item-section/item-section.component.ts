import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent {
  @Input() item!: Item;
  @Output() onDeleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() onToggleMissing: EventEmitter<Item> = new EventEmitter(); 
  faTimes = faTimes;

  onDelete(item: Item) {
    this.onDeleteItem.emit(item);
  }

  onToggle(item: Item) {
    this.onToggleMissing.emit(item);
  }
}