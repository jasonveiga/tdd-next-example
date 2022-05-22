import { render, screen } from '@testing-library/react';
import DateDisplay from './DateDisplay';

// Handy way to ensure consistent date output
jest.useFakeTimers().setSystemTime(new Date('2022-01-01'));

describe('date/time display component', () => {
  it('works with default props', () => {
    render(<DateDisplay />);
    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      '2021-01-01'
    );
  });
});
