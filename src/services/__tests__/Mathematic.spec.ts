import {Mathematic} from 'services/Mathematic';

const mathematicInstance = new Mathematic();

it('Add method works correctly', () => {
  expect(mathematicInstance.add(10, 10)).toBe(20);
  expect(mathematicInstance.add(-1, 1)).toBe(0);
  expect(mathematicInstance.add(0, 9)).toBe(9);
});
