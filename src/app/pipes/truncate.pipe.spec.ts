import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  it('Create an instance', () => {
    const pipe = new TruncatePipe();
    expect(pipe).toBeTruthy();
  });

  it('Truncate text[10] "Rua Francisco Celestino de Medeiros" to "Rua Franci..."', () => {
    const pipe = new TruncatePipe();

    let args = [10];
    expect(pipe.transform('Rua Francisco Celestino de Medeiros', args)).toBe(
      'Rua Franci...'
    );
  });
});
