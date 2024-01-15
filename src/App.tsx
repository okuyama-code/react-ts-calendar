import './App.css'
import Calendar from './calendar/Calendar'

const App = () => {

  return (
    <>
      <div className="mt-16 flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-4">
          <p>
            <strong>Selected Date: </strong>
          </p>
        </div>

        <Calendar />
      </div>
    </>
  )
}

export default App
