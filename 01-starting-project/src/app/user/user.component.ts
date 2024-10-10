import {Component, EventEmitter, Input, Output, output} from '@angular/core';

/*
type User = {
  id: string;
  avatar: string;
  name: string;
};
*/

interface User {
  id: string;
  avatar: string;
  name: string;
}

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  /*
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string; // used to avoid TS error about properties being potentially undefined
  @Input({ required: true }) name!: string; // "required" was introduced in v16, an error is thrown if parent component fails to pass a value for that input
  */
  @Input({ required: true }) user!: User;

  @Output() select = new EventEmitter<string>();
  /*select = output<string>();*/

  /*
  avatar = input.required<string>(); // Signal = Data container
  name = input.required<string>(); // These are read-only
  */

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  /*
  imagePath = computed(() => { // computed() recalculates whenever the value of "avatar" changes
    return 'assets/users/' + this.avatar();
  });
  */

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}
