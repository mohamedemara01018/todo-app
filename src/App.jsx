import './App.css'
import AddTask from './components/AddTask'
import TaskList from './components/taskList'

function App() {

  return (
    <div className='flex items-center justify-center '>
      <div className="bg-white md:w-[50%] p-[30px] rounded-md shadow-lg">
        <h1 className='font-bold text-purple-700 text-center text-[1.8rem]'>Task Management App</h1>
        <div className='flex flex-col gap-4'>
          <AddTask />
          <TaskList />
        </div>
      </div>

    </div>
  )
}

export default App
