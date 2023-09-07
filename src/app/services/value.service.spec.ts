import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService],
    });
    service = TestBed.inject(ValueService);
  });

  it('should be create', () => {
    expect(service).toBeTruthy();
  });

  describe('Tests for getValue', () => {
    it('should return "my value"', () => {
      expect(service.getValue()).toBe('my value');
    });
  });

  describe('Tests for setValue', () => {
    it('should change the value', () => {
      expect(service.getValue()).toBe('my value');
      expect(service.setValue('value'));
      expect(service.getValue()).toBe('value');
    });
  });

  describe('Tests for getPromiseValue', () => {
    it('should return "promise value" from promise', async () => {
      const valuePromise = await service.getPromiseValue();
      expect(valuePromise).toBe('promise value');
    });
  });

  describe('Tests for getObservableValue', () => {
    it('should return "observable value" from observable', () => {
      service.getObservableValue().subscribe((valueObservable) => {
        expect(valueObservable).toBe('observable value');
      });
    });
  });
});
