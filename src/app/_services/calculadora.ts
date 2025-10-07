import { Injectable } from '@angular/core';
import { Logger } from './logger';

@Injectable({
  providedIn: 'root',
})
export class CalculadoraService {
  constructor(private loggerService: Logger) {}

  calcular(
    num1: number,
    num2: number,
    operacao: 'soma' | 'subtracao' | 'multiplicacao' | 'divisao' | ''
  ): number | null {
    switch (operacao) {
      case 'soma':
        return num1 + num2;
      case 'subtracao':
        return num1 - num2;
      case 'multiplicacao':
        return num1 * num2;
      case 'divisao':
        return +(num1 / num2).toFixed(2);
      default:
        this.loggerService.log('Operação não existe.');
        return null;
    }
  }
}
