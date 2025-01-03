import { Component } from '@angular/core';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
    IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab4Page {
  constructor() {}
}
