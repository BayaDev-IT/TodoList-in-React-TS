import React, { FC } from 'react'
import { useAppDispatch } from '../store/hooks/hooks'
import {
	Todo,
	fetchByRemoveTodo,
	fetchByToggleComplete,
} from '../store/slices/todoSlice'

const TodoItem: FC<Todo> = ({ id, title, completed }) => {
	const dispatch = useAppDispatch()

	const handleChange = () => {
		dispatch(fetchByToggleComplete(id))
	}
	const handleDeleted = () => {
		dispatch(fetchByRemoveTodo(id))
	}
	return (
		<li>
			<input checked={completed} onChange={handleChange} type='checkbox' />
			<span style={{ textDecoration: !completed ? 'none' : 'line-through' }}>
				{title}
			</span>
			<span style={{ cursor: 'pointer' }} onClick={handleDeleted}>
				&times;
			</span>
		</li>
	)
}

export default TodoItem
