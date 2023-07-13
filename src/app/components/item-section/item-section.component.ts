import { Component, Input } from '@angular/core';
import { Item } from 'src/app/Item';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-item-section',
  templateUrl: './item-section.component.html',
  styleUrls: ['./item-section.component.scss']
})
export class ItemSectionComponent {
  @Input() item!: Item;
  faTimes = faTimes;
}