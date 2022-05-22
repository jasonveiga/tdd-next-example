import { FunctionComponent } from 'react';
import { format } from 'date-fns';

export interface DateDisplayProps {
  value?: Date;
}

export const DateDisplay: FunctionComponent<DateDisplayProps> = ({
  value = new Date(Date.now()),
}) => <h1>{format(value, 'yyyy-MM-dd')}</h1>;

export default DateDisplay;
