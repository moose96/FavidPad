import React, { Fragment } from 'react';
import { render } from '@testing-library/react';

import MessageBox from './MessageBox';

test('render message box', () => {
  const buttonTypes = [
    ['OK'], ['OK', 'Anuluj'], ['Tak', 'Nie']
  ];

  const { getAllByText } = render(
    <Fragment>
      <MessageBox type="yes-no">
        value
      </MessageBox>
      <MessageBox type="ok">
        value
      </MessageBox>
      <MessageBox type="ok-cancel">
        value
      </MessageBox>
    </Fragment>
  );

  const msgBoxes = getAllByText(/value/i);

  msgBoxes.forEach((element, index) => {
    expect(element).toBeInTheDocument();

    const buttons = element.querySelectorAll('.button');
    buttons.forEach((button, buttonIndex) => {
      expect(button.innerHTML).toEqual(buttonTypes[index][buttonIndex]);
    });
  })
})