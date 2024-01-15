import React from 'react'
import Cell from './Cell'
import { endOfMonth, startOfMonth } from 'date-fns';

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Props = {
  value?: Date;
  onChange: (data: Date) => void
}

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value)
  const endDate = endOfMonth(value)


  console.log(endDate)

  return (
    <div className="w-[400px] border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>{"<"}</Cell>
        <Cell className='col-span-3'>August 2022</Cell>
        <Cell>{">"}</Cell>
        <Cell>{">>"}</Cell>

        {weeks.map((week) => (
          <Cell className="text-xs font-bold uppercase">{week}</Cell>
        ))}
      </div>
    </div>
  )
}

export default Calendar
