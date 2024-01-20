import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export type Todo = {
	id: string
	title: string
	completed: boolean
}

type TodoState = {
	todos: Todo[]
	loading: boolean
	error: null | string
}

const initialState: TodoState = {
	todos: [],
	loading: false,
	error: null,
}

export const fetchTodos = createAsyncThunk<
	Todo[],
	void,
	{ rejectValue: string }
>('todos/fetchTodos', async (_, { rejectWithValue }) => {
	const res = await axios.get(
		'https://jsonplaceholder.typicode.com/todos?_limit=10'
	)
	// console.log(res)
	if (res.status !== 200) {
		return rejectWithValue('Server error')
	}
	return res.data
})

export const fetchByRemoveTodo = createAsyncThunk<
	string,
	string,
	{ rejectValue: string }
>('todos/fetchByRemoveTodo', async (id, { rejectWithValue }) => {
	const res = await axios.delete(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	)
	// console.log(res)
	if (res.status !== 200) {
		return rejectWithValue('Server error')
	}
	return id
})

export const fetchByToggleComplete = createAsyncThunk<
	string,
	string,
	{ rejectValue: string; state: { todos: TodoState } }
>('todos/fetchByToggleComplete', async (id, { rejectWithValue, getState }) => {
	const todo = getState().todos.todos.find(todo => todo.id === id)
	if (todo) {
		const res = await axios.patch(
			`https://jsonplaceholder.typicode.com/todos/${id}`,
			{ completed: !todo.completed }
		)
		if (res.status !== 200) {
			return rejectWithValue('Server error')
		}
		return id
	}
	return rejectWithValue('No such todo in the List')
})

export const fetchByAddNewTodo = createAsyncThunk<
	Todo,
	string,
	{ rejectValue: string }
>('todos/fetchByAddNewTodo', async (text, { rejectWithValue }) => {
	const todo = {
		title: text,
		userId: 1,
		completed: false,
	}

	const res = await axios.post(
		'https://jsonplaceholder.typicode.com/todos',
		todo
	)
	if (res.status !== 201) {
		return rejectWithValue('Server error')
	}
	const data = res.data
	return data as Todo
})

const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {},
	extraReducers: ({ addCase }) => {
		addCase(fetchTodos.pending, state => {
			state.loading = true
			state.error = null
		})
		addCase(fetchTodos.fulfilled, (state, action) => {
			state.todos = action.payload
			state.loading = false
		})
		addCase(fetchTodos.rejected, (state, action) => {
			state.loading = false
			if (action.error.message) {
				state.error = action.error.message
			}
		})
		addCase(fetchByRemoveTodo.pending, state => {
			state.loading = true
			state.error = null
		})
		addCase(fetchByRemoveTodo.fulfilled, (state, action) => {
			state.loading = false
			state.todos = state.todos.filter(item => item.id !== action.payload)
		})
		addCase(fetchByRemoveTodo.rejected, (state, action) => {
			state.loading = false
			if (action.error.message) {
				state.error = action.error.message
			}
		})
		addCase(fetchByToggleComplete.pending, state => {
			state.loading = true
			state.error = null
		})
		addCase(fetchByToggleComplete.fulfilled, (state, action) => {
			state.loading = false
			const toggledTodo = state.todos.find(item => item.id === action.payload)
			if (toggledTodo) {
				toggledTodo.completed = !toggledTodo.completed
			}
		})
		addCase(fetchByToggleComplete.rejected, (state, action) => {
			state.loading = false
			if (action.error.message) {
				state.error = action.error.message
			}
		})
		addCase(fetchByAddNewTodo.pending, state => {
			state.loading = true
			state.error = null
		})
		addCase(fetchByAddNewTodo.fulfilled, (state, action) => {
			state.loading = false
			state.todos.push({
				...action.payload,
				id: state.todos[state.todos.length - 1].id + 1,
			})
		})
		addCase(fetchByAddNewTodo.rejected, (state, action) => {
			state.loading = false
			if (action.error.message) {
				state.error = action.error.message
			}
		})
	},
})

export default todoSlice.reducer
