import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora';
import { Logger } from './logger';

describe('Calculadora', () => {
  let service: CalculadoraService;
  let loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj(Logger, ['log']);
    TestBed.configureTestingModule({
      providers: [
        CalculadoraService,
        {
          provide: Logger,
          useValue: loggerSpy,
        },
      ],
    });
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be sum two numbers', () => {
    expect(service.calcular(1, 2, 'soma')).toBe(3);
  });

  it('should be sub two numbers', () => {
    expect(service.calcular(1, 2, 'subtracao')).toBe(-1);
    expect(service.calcular(2, 1, 'subtracao')).toBe(1);
    expect(service.calcular(10, 5, 'subtracao')).toBe(5);
  });

  it('should be multiply two numbers', () => {
    expect(service.calcular(1, 2, 'multiplicacao')).toBe(2);
    expect(service.calcular(2, 2, 'multiplicacao')).toBe(4);
    expect(service.calcular(2, 3, 'multiplicacao')).toBe(6);
    expect(service.calcular(2, 4, 'multiplicacao')).toBe(8);
  });

  it('should be divide two numbers', () => {
    expect(service.calcular(1, 2, 'divisao')).toBe(0.5);
    expect(service.calcular(2, 2, 'divisao')).toBe(1);
    expect(service.calcular(2, 3, 'divisao')).toBe(0.67);
    expect(service.calcular(2, 4, 'divisao')).toBe(0.5);
    expect(service.calcular(10, 5, 'divisao')).toBe(2);
  });

  it('should operator not exists', () => {
    const result = service.calcular(1, 2, '');
    expect(result).toBeNull();
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
    expect(loggerSpy.log).toHaveBeenCalledWith('Operação não existe.');
  });
});
