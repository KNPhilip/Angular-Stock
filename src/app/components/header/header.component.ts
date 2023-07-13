import { Component } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = 'Angular-Stock';
  showEditForm!: boolean;
  showAddForm!: boolean;
  editSubscription: Subscription;
  addSubscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.addSubscription = this.uiService.onToggleAddItem().subscribe(value => this.showAddForm = value);
    this.editSubscription = this.uiService.onToggleEditItem().subscribe((value => (this.showEditForm = value)));
  }

  toggleItems() {
    if (this.showEditForm || this.showAddForm) {
      this.uiService.hideEditForms();
      this.uiService.hideAddForms();
    }
    else if (!this.showAddForm) {
      this.uiService.showAddItem();
    }
  }

  hasRoute(route: string) {
    return this.router.url === route;
  }
}