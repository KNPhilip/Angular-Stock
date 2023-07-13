import { Component, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/Item';
import { Category } from 'src/app/Item';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent {
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter();
  text?: string;
  quantity: number = 0;
  category: Category = Category.Other;
  missing: boolean = false;
  showAddItem: boolean = false;
  subscription!: Subscription;
  
  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddItem = value));
  }

  onSubmit() {
    if(!this.text) {
      alert('Please enter the name of the stock.')
      return;
    }

    const newItem = {
      text: this.text,
      quantity: this.quantity,
      category: this.category,
      missing: this.missing
    }

    this.onAddItem.emit(newItem);

    this.text = '';
    this.quantity = 0;
    this.category = Category.Other;
    this.missing = false;
  }
}