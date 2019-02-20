import { Component } from '@angular/core';
import { Model, reMind } from './shared/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  model: Model = new Model();
  title = 'reMind. To ' + this.model.user;

  /**
   * filteres out the chores already done by not showing them anymore
   * @returns chores list
   */
  getChores = () => this.model.items.filter(i => !i.done);

  /**
   * creates a new reminder based on the chore and date input
   */
  addChore = (newChore: string, when: string) => this.model.items.push(new reMind(newChore, when, false));


}
