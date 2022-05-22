import { FunctionComponent } from 'react';

export interface DateDisplayProps {
  value?: Date;
}

export const DateDisplay: FunctionComponent<DateDisplayProps> = ({
  value = new Date(Date.now()),
}) => <h1>DATE DISPLAY HERE</h1>;

export default DateDisplay;
