import React from 'react'
import Cell from './Cell'
import { differenceInDays, endOfMonth, startOfMonth } from 'date-fns';

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

type Props = {
  value?: Date;
  onChange: (data: Date) => void
}

const Calendar: React.FC<Props> = ({ value = new Date(), onChange }) => {
  const startDate = startOfMonth(value) // Mon Jan 01 2024
  const endDate = endOfMonth(value) // Wed Jan 31 2024
  // これをmapで展開してカレンダーの数字を出す。要素数で配列を作る書き方をすればいい
  const numDays = differenceInDays(endDate, startDate) + 1; //31

  // カレンダーの始まりの空白を担当
  const prefixDays = startDate.getDay(); // この日は１で表示 1は月曜日

  // カレンダーの終わりの空白を担当
  const suffixDays = 6 - endDate.getDay();

  // console.log(endDate.getDay()); // 3
  console.log(suffixDays) // 3

  return (
    <div className="w-[400px] border-t border-l">
      <div className="grid grid-cols-7 items-center justify-center text-center">
        <Cell>{"<<"}</Cell>
        <Cell>{"<"}</Cell>
        <Cell className='col-span-3'>JUN 2024</Cell>
        <Cell>{">"}</Cell>
        <Cell>{">>"}</Cell>

        {weeks.map((week) => (
          <Cell key={week} className="text-xs font-bold uppercase">{week}</Cell>
        ))}

        {/* カレンダーの始まりの空白を担当 空欄をセルで表示するため */}
        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {/* カレンダーの日にちの一覧を作成している箇所 */}

        {Array.from({ length: numDays}).map((_, index) => {
          const date = index + 1;

          return (
            <Cell
              key={date}
              // isActive={isCurrentDate}
              // onClick={() => handleClickDate(date)}
            >
              {date}
            </Cell>
          )
        })}


        {/* カレンダーの終わりの空白を担当 空欄をセルで表示するため */}
        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

      </div>
    </div>
  )
}

export default Calendar
