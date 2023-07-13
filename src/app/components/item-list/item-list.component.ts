import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/Item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  itemList: Item[] = [];

  constructor(private itemService: ItemService) {

  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => this.itemList = items);
  }

  deleteItem(item: Item) {
    this.itemService.deleteItem(item).subscribe(() => (this.itemList = this.itemList.filter(t => t.id != item.id)))
  }

  toggleMissing(item: Item) {
    item.missing = !item.missing;
    this.itemService.updateItemMissing(item).subscribe();
  }
}