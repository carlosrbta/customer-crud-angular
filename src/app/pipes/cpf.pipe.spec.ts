import { CpfPipe } from './cpf.pipe';

describe('CpfPipe', () => {
  it('Create an instance', () => {
    const pipe = new CpfPipe();
    expect(pipe).toBeTruthy();
  });

  it('Format cpf 00011122233 to 000.111.222-33', () => {
    const pipe = new CpfPipe();
    expect(pipe.transform('00011122233', [])).toBe('000.111.222-33');
  });
});
