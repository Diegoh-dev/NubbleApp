import React from 'react';

import {render} from 'test-utils';

import {Button} from '../Button';
describe('<Button />', () => {
  it('the component rendered', () => {
    render(<Button title="Teste render" />);
  });
  it('should shows loading indicator', () => {
    render(<Button title="Teste render" />);
  });
});
