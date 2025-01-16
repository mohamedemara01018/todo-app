
import { useDispatch, useSelector } from "react-redux"
import { getTasksValue, setStatus, setTask } from "../rtk/slices/taskSlice"
import { useEffect, useState } from "react";
import EditTask from "./EditTask";


function TaskList() {
    const [isEdit, setIsEdit] = useState(false)
    const [task, setTask_1] = useState({});
    const [filterdTasks, setFilterdTasks] = useState([]);
    const {
        tasks,
        status,
    } = useSelector(getTasksValue);
    const dispatch = useDispatch()
    function handleDelete(id) {
        const tasksCopy = tasks.filter((task) => {
            return task.id !== id
        })
        dispatch(setTask(
            tasksCopy
        ))
    }
    function handleFilter() {
        if (status == 'All') {
            setFilterdTasks([...tasks])
        } else {
            const filter = tasks.filter((task) => {
                return task.status == status
            })
            setFilterdTasks(filter)
        }

    }
    useEffect(() => {
        handleFilter()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [status, tasks])
    return (
        <div className="">
            <div className="flex flex-col">
                <div className="flex items-center justify-between">
                    <h2>Tasks</h2>
                    <div className="flex gap-2 items-center">
                        <p>Filter:</p>
                        <select name="" id="" value={status}
                            className="border border-slate-400 px-4 py-2 outline-none"
                            onChange={(e) => {
                                dispatch(setStatus(e.target.value));
                            }}>
                            <option value="All">All</option>
                            <option value="To Do">To Do</option>
                            <option value="InProgress">InProgress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>
                <ul className="flex flex-col items-start justify-center gap-4 pt-8 ">
                    {
                        tasks && [...filterdTasks]?.reverse().map((task) => {
                            return <li key={task.id} className="bg-gray-100 p-[20px] flex items-center justify-between gap-4 w-full rounded-md">
                                <div>
                                    <p className="font-bold">{task.title}</p>
                                    {task.description && <p className="text-slate-400">{task.description}</p>}
                                    <p className="text-slate-600">Status:<span className="underline italic"> {task.status}</span></p>
                                </div>
                                <div className="flex items-center gap-4 *:transition-all *:duration-200">
                                    <button className="bg-blue-400 hover:bg-blue-500 p-2 px-4 text-white rounded-md "
                                        onClick={() => {
                                            setTask_1(task)
                                            setIsEdit(true)
                                        }}
                                    >
                                        Edit
                                    </button>
                                    <button className="bg-red-400 hover:bg-red-500 p-2 px-4 text-white rounded-md "
                                        onClick={() => handleDelete(task.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        })
                    }
                </ul>
                {isEdit && <EditTask task={task} setIsEdit={() => setIsEdit(false)} />}
            </div>
        </div>
    )
}

export default TaskList