import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GeradorService {
  randomDigit(): string {
    const randNumber = Math.floor(Math.random() * 999);
    return String(
      randNumber < 10
        ? '00' + randNumber
        : randNumber < 100
        ? '0' + randNumber
        : randNumber
    );
  }
  generateSequence(first: string, second: string, third: string): string {
    return `${first}${second}${third}`;
  }
  // checkState(input: string): string | undefined {
  //   switch (input) {
  //     case 'RS':
  //       return '0';
  //     case 'DF, GO, MS, MT e TO':
  //       return '1';
  //     case 'AC, AM, AP, PA, RO e RR':
  //       return '2';
  //     case 'CE, MA e PI':
  //       return '3';
  //     case 'AL, PB, PE, RN':
  //       return '4';
  //     case 'BA e SE':
  //       return '5';
  //     case 'MG':
  //       return '6';
  //     case 'ES e RJ':
  //       return '7';
  //     case 'SP':
  //       return '8';
  //     case 'PR e SC':
  //       return '9';
  //     default:
  //       return '';
  //   }
  // }

  changeState(input: string, state: string) {
    if (state !== 'Random') {
      return input.slice(0, 10) + state;
    }
    return input;
  }

  sequenceCalc(strSequence: string, digitChecked: string): string {
    if (digitChecked != '') {
      strSequence = strSequence.slice(1, 10) + digitChecked;
    }
    let result = 0;
    for (let i = 10, j = 0; i >= 2; i--, j++) {
      const mult = parseInt(strSequence.charAt(j)) * i;
      result += mult;
    }
    if (result % 11 < 2) {
      return '0';
    }
    return String(11 - (result % 11));
  }

  randomCpf(state: string | undefined): string {
    let cpf = this.generateSequence(
      this.randomDigit(),
      this.randomDigit(),
      this.randomDigit()
    );
    if(state != "Random"){
      cpf = cpf.slice(0, 8) + state;
    }
    const digitChecked = this.sequenceCalc(cpf, '');
    return (
      cpf.slice(0, 3) +
      '.' +
      cpf.slice(3, 6) +
      '.' +
      cpf.slice(6, 9) +
      '-' +
      digitChecked +
      this.sequenceCalc(cpf, digitChecked)
    );
  }
  constructor() {}
}
