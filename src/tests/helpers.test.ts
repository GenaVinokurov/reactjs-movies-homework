import { getTimeFromMins, convertGenresToString } from '../helpers';

describe('helper functions', () => {
  it('test getTimeFromMins function', () => {
    expect(getTimeFromMins(100)).toBe('1:40');
    expect(getTimeFromMins(60)).toBe('1:0');
  });

  it('test convertGenresToString', () => {
    const genresArray = [
      {
        id: 0,
        name: 'action',
      },
      {
        id: 1,
        name: 'historical',
      },
    ];
    expect(convertGenresToString([0], genresArray)).toBe('action ');
    expect(convertGenresToString([0, 1], genresArray)).toBe('action historical ');
    expect(convertGenresToString([], genresArray)).toBe('');
  });
});
