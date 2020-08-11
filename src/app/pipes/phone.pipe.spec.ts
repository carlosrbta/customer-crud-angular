import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  it('Create an instance', () => {
    const pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('Format phone 43277951122 to (43) 27795-1122', () => {
    const pipe = new PhonePipe();
    expect(pipe.transform('43277951122', [])).toBe('(43) 27795-1122');
  });
});
