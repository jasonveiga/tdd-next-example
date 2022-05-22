import { FunctionComponent } from 'react';
import { format } from 'date-fns';

/**
 * Properties for DateDisplay
 */
export interface DateDisplayProps {
  /** Date value to display (defaults to current date) */
  value?: Date;
}

/**
 * Displays the specified date
 * @param props properties 
 * @returns display component
 */
export const DateDisplay: FunctionComponent<DateDisplayProps> = ({
  value = new Date(Date.now()),
}) => <h1>{format(value, 'yyyy-MM-dd')}</h1>;

export default DateDisplay;
