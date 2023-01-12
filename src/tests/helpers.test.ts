import { getTimeFromMins } from '../helpers';

describe('helper functions', () => {
  it('test getTimeFromMins function', () => {
    expect(getTimeFromMins(100)).toBe('1:40');
    expect(getTimeFromMins(60)).toBe('1:0');
  });
});
