import { StartsWithPipe } from './begins-with.pipe';

describe('BeginsWithPipe', () => {
  it('create an instance', () => {
    const pipe = new StartsWithPipe();
    expect(pipe).toBeTruthy();
  });
});
