import { Component } from '@angular/core';
import { Item } from '../../Item';
import { Items } from '../../mock-items';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  itemList: Item[] = Items
}