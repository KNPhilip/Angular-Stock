import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent {
  @Input() item!: Item;
  @Output() onDeleteItem: EventEmitter<Item> = new EventEmitter();
  @Output() onEditItem: EventEmitter<Item> = new EventEmitter();
  @Output() onToggleMissing: EventEmitter<Item> = new EventEmitter();
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(private uiservice:UiService) {}

  onDelete(item: Item) {
    this.onDeleteItem.emit(item);
  }

  onEdit(item: Item) {
    this.uiservice.showEditItem(item);
  }

  onToggle(item: Item) {
    this.onToggleMissing.emit(item);
  }
}