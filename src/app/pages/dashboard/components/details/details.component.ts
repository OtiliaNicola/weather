import { Component, Input } from '@angular/core';
import { Detail } from '../../../../interfaces/interface.detail';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  @Input('details') details!: Detail[];
}
