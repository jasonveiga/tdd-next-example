import { render, screen } from '@testing-library/react';
import DateDisplay from './DateDisplay';

// Handy way to ensure consistent date output
jest.useFakeTimers().setSystemTime(new Date('2022-01-01T00:00:00Z'));

describe('date/time display component', () => {
  it('works with default props', () => {
    render(<DateDisplay />);
    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      '2022-01-01'
    );
  });

  it('works with custom date', () => {
    render(<DateDisplay value={new Date('2022-02-02T00:00:00Z')} />);
    expect(screen.queryByRole('heading', { level: 1 })).toHaveTextContent(
      '2022-02-02'
    );
  });
});
