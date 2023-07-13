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
}