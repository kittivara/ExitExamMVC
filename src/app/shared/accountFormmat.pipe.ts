import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accountFormmat',
})
export class AccountFormmatPipe implements PipeTransform {
  transform(value: any): any {
    var result = '';
    if (value && value.length >= 13) {
      var account = value;
      account =
        account.substr(0, 4) +
        '-' +
        account.substr(4, 6) +
        '-' +
        account.substr(6, 8) +
        '-' +
        account.substr(8, 13);
      result = account;
    }
    return result;
  }
}
