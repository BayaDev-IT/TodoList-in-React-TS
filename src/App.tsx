import React, { FC, useState, useEffect, FormEventHandler } from 'react'
import Form from './components/Form'
import TodoList from './components/TodoList'
import { useAppDispatch, useAppSelector } from './store/hooks/hooks'
import { fetchByAddNewTodo, fetchTodos } from './store/slices/todoSlice'

const App: FC = () => {
	const [text, setText] = useState('')
	const { error, loading } = useAppSelector(state => state.todos)
	const dispatch = useAppDispatch()

	const handleAction: FormEventHandler<HTMLFormElement> = e => {
		e.preventDefault()
		if (text.trim().length) {
			dispatch(fetchByAddNewTodo(text))
			setText('')
		}
	}

	useEffect(() => {
		dispatch(fetchTodos())
	}, [dispatch])

	if (loading) {
		return <h1>Loading...</h1>
	}
	return (
		<div>
			<Form value={text} setText={setText} handleAction={handleAction} />
			{error && <span style={{ color: 'red' }}>{error}</span>}
			<TodoList />
		</div>
	)
}

export default App
