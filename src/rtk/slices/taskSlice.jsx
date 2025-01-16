import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks: localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [],
    status: 'All',
}


export const fetchTodo = createAsyncThunk('taskSlice/fetchTodo', async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
    const data = await res.json();
    return data.map((task) => (
        {
            id: task.id,
            title: task.title,
            description: '',
            status: task.completed ? 'Completed' : 'To Do'
        }
    ))
})
function setONLocalstorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
const taskSlice = createSlice({
    name: 'taskSlice',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
            setONLocalstorage(state.tasks)
        },
        setTask: (state, action) => {
            state.tasks = action.payload;
            setONLocalstorage(state.tasks)

        },
        setStatus: (state, action) => {
            state.status = action.payload;
        },
    },

})

export default taskSlice.reducer;
export const { addTask, setTask, setStatus } = taskSlice.actions
export const getTasksValue = (state => state.tasks)
