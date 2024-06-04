jest.mock('mobx-react', () => ({
  Observer: props => props.children(),
  observer: component => component,
}));
