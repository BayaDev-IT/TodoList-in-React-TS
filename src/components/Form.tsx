import React, { FC, FormEventHandler, ChangeEventHandler } from 'react'

interface FormProps {
	value: string
	setText: (e: string) => void
	handleAction: FormEventHandler<HTMLFormElement>
}

const Form: FC<FormProps> = ({ handleAction, setText, value }) => {
	const updateText: ChangeEventHandler<HTMLInputElement> = e => {
		setText(e.target.value)
	}
	return (
		<form onSubmit={handleAction}>
			<input
				value={value}
				onChange={updateText}
				type='text'
				placeholder='new todo'
			/>
			<button>Add Todo</button>
		</form>
	)
}

export default Form
