import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/Item';
import { Category } from 'src/app/Item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {
  @Output() onEditItem: EventEmitter<Item> = new EventEmitter();
  text!: string;
  quantity: number = 0;
  category: Category = Category.Other;
  missing!: boolean;
  showEditItem: boolean = false;
  currentlyEditing!: Item;
  id!: number;
  editSubscription: Subscription;
  currentEditSubscription: Subscription;

  constructor(private uiService: UiService)
  {
    this.editSubscription = this.uiService.onNewItemToEdit().subscribe((value) => (this.id = Number(value.id), this.currentlyEditing = value, this.text = value.text, this.quantity = value.quantity, this.category = value.category, this.missing = value.missing));
    this.currentEditSubscription = this.uiService.onToggleEditItem().subscribe((value) => (this.showEditItem = value));
  }

  ngOnInit(): void { }

  onSubmit() {
    if(!this.text) {
      alert('Please provide a name of whats in stock..')
      return;
    }

    const newItem = {
      id: this.id,
      text: this.text,
      quantity: this.quantity,
      category: this.category,
      missing: this.missing
    }

    this.onEditItem.emit(newItem);

    this.uiService.hideEditForms();
    this.uiService.hideAddForms();
  }
}