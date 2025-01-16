/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasksValue, setTask } from "../rtk/slices/taskSlice";


function EditTask({ task, setIsEdit }) {
    console.log(task.id)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [status_1, setStatus] = useState(task.status);
    const dispatch = useDispatch()
    const {
        tasks,
    } = useSelector(getTasksValue);
    console.log(title, description, status)
    function handleSubmit(e) {
        e.preventDefault()
        const EditTask = {
            id: task.id,
            title,
            description,
            status: status_1
        }
        dispatch(setTask(
            tasks.map((ele) => {
                if (task.id == ele.id) {
                    return EditTask

                } else {
                    return ele
                }
            })
        ))
        setIsEdit()
    }
    console.log(tasks)
    return (
        <div className="fixed top-0 bottom-0 right-0 left-0 bg-[#00000017] flex items-center justify-center">
            <div className="bg-white shadow-sm p-[20px] w-[400px] rounded-md">
                <h3>Edit Task</h3>
                <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 *:outline-none *:border *:border-slate-400 *:p-2 *:rounded-sm">
                    <input type="text" placeholder="Task Name" className="focus:border-blue-600"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea name="" id="" placeholder="Task Description" className="resize-none focus:border-blue-600 "
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <select name="" id="" className="focus:border-blue-600"
                        value={status_1}
                        onChange={(e) => setStatus(e.target.value)}
                    >
                        <option value="To Do">To Do</option>
                        <option value="InProgress">InProgress</option>
                        <option value="Completed">Completed</option>
                    </select>
                    <div className="border-none flex items-center justify-end gap-4">
                        <button className="px-4 py-2 bg-red-400 hover:bg-red-600 text-white rounded-md"
                            onClick={setIsEdit}
                        >
                            Cancel
                        </button>
                        <input type="submit" value={'Edit Task'} className="bg-blue-400 hover:bg-blue-600 py-2 px-4 transition-all duration-200 rounded-md text-white cursor-pointer" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditTask