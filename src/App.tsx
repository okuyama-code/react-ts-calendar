import { useState } from 'react';
import './App.css'
import Calendar from './calendar/Calendar'

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  // const [currentDate, setCurrentDate] = useState(new Date("2023-02-01"));

  // console.log(setCurrentDate)

  return (
    <>
      <div className="mt-16 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <p>
            <strong>Selected Date: </strong>
          </p>
        </div>

        <Calendar value={currentDate} setCurrentDate={setCurrentDate} />
      </div>
    </>
  )
}

export default App
