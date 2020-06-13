import React from 'react';
import { render } from '@testing-library/react';

import Text from './Text';

test('render Text', () => {
  const { container, getByText } = render(
    <div>
      <Text name="test" value="valinp" onChange={() => {}} />
      <Text name="test" value="valera" onChange={() => {}} multiline/>
    </div>
  );

  const input = container.querySelector('input');
  const textarea = getByText(/valera/i);

  expect(input).toBeInTheDocument();
  expect(textarea).toBeInTheDocument();

  expect(input.type).toEqual('text');
  expect(textarea.type).toEqual('textarea');
});