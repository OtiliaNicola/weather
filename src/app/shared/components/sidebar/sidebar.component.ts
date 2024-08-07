import { Component, Input } from '@angular/core';
import { City } from '../../../interfaces/interface.city';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input('cities') cities!: City[];
}
