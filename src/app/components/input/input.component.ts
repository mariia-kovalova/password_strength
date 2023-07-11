import { Component } from '@angular/core';
import { Status } from 'src/types/Status';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  password: string = '';

  getPasswordStrength(): Status {
    const { password } = this;

    if (password.length === 0) return 'empty';
    if (password.length < 8) return 'short';

    const hasLetters = /[a-zA-Z]/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password);
    const hasDigits = /[0-9]/.test(password);

    const isStrong = hasLetters && hasSymbols && hasDigits;
    const isMedium =
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols);
    const isEasy = hasLetters || hasSymbols || hasDigits;

    if (isStrong) return 'strong';
    if (isMedium) return 'medium';
    if (isEasy) return 'easy';

    return 'empty';
  }
}
