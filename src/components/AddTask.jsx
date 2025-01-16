import { useState } from "react"
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from 'uuid'
import { addTask } from "../rtk/slices/taskSlice";

function AddTask() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState('To Do');
    const dispatch = useDispatch()
    function handleSubmit(e) {
        e.preventDefault()
        const newTask = {
            id: uuid4(),
            title,
            description,
            status
        }
        dispatch(addTask(newTask))
        setTitle('')
        setDescription('')
        setStatus('To Do')
    }

    return (
        <div>
            <h2>Add New Task</h2>
            <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 *:outline-none *:border *:border-slate-400 *:p-2 *:rounded-sm">
                <input type="text" placeholder="Task Name" className="focus:border-blue-600" required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea name="" id="" placeholder="Task Description" className="resize-none focus:border-blue-600 " required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                <select name="" id="" className="focus:border-blue-600"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                >
                    <option value="To Do">To Do</option>
                    <option value="InProgress">InProgress</option>
                    <option value="Completed">Completed</option>
                </select>
                <input type="submit" value={'Add Task'} className="bg-blue-600 text-white cursor-pointer" />
            </form>
        </div>
    )
}

export default AddTask