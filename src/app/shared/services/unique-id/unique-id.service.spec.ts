import {UniqueIdService} from './unique-id.service';

describe(UniqueIdService.name, () => {
  let uniqueIdService: UniqueIdService;

  beforeEach(() => {
    uniqueIdService = new UniqueIdService();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, () => {
    const id = uniqueIdService.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicated ids when called multiple times`, () => {
    const ids = new Set();

    for (let i = 0; i < 50; i++) {
      ids.add(uniqueIdService.generateUniqueIdWithPrefix('app'));
    }

    expect(ids.size).toBe(50);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return the number of the generated ids when called`, () => {
    uniqueIdService.generateUniqueIdWithPrefix('app');
    uniqueIdService.generateUniqueIdWithPrefix('app');

    expect(uniqueIdService.getNumberOfGeneratedIds()).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw when called with empty`, () => {
    const emptyValues = [null, undefined, '', '1', '0', 'app'];

    emptyValues.forEach(emptyValue => {
      expect(() => uniqueIdService.generateUniqueIdWithPrefix(emptyValue))
        .withContext(`Empty value: ${emptyValue}`)
        .toThrow();
    });
  });
});

// Blablabla should blablabla when blablabla
