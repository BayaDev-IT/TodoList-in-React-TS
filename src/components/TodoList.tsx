import React, { FC } from 'react'
import { useAppSelector } from '../store/hooks/hooks'
import TodoItem from './TodoItem'

const TodoList: FC = () => {
	const { todos } = useAppSelector(state => state.todos)
	return (
		<ol>
			{todos.length > 0 && todos.map(el => <TodoItem key={el.id} {...el} />)}
		</ol>
	)
}

export default TodoList
