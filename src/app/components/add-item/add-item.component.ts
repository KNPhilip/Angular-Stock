import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/Item';
import { Category } from 'src/app/Item';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {
  @Output() onAddItem: EventEmitter<Item> = new EventEmitter();
  text!: string;
  quantity: number = 0;
  category: Category = Category.Other;
  missing: boolean = false;
  showAddItem!: boolean;
  subscription: Subscription;

  constructor(private uiService: UiService)
  {
    this.subscription = this.uiService.onToggleAddItem().subscribe((value) => (this.showAddItem = value));
  }

  ngOnInit(): void { }

  onSubmit() {
    if(!this.text) {
      alert('Please provide a name of whats in stock..');
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
    this.missing = false;
    this.category = Category.Other;

    this.uiService.hideEditForms();
    this.uiService.hideAddForms();
  }
}