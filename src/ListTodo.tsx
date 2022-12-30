import { useState, FC, useCallback } from 'react'
import { ITodoList } from './Interface'
import './Todo.css'

const ListTodo: FC = () => {
    const [todoList, setTodoList] = useState<ITodoList[]>([])
    const [inputValue, setInputValue] = useState<string>("")

    const addTodo = useCallback((text: string) => {
        if (text !== "") {
            setTodoList([...todoList,{ id: Date.now(), text, isCompleted: false }])
            setInputValue('')
        } if (text === "") {
            return 0
        }

    }, [todoList])

    const removeTodo = useCallback((id: number) => {
        return setTodoList(todoList.filter((list) => list.id !== id))
    }, [todoList])

    const toggleTodo = useCallback((id: number) => {
        setTodoList(
            todoList.map((list) =>
                list.id === id ? { ...list, isCompleted: !list.isCompleted } : list
            )
        )
    },[todoList])
    return (
        <div className='main__container'>
            <h1>To Do List</h1>
            <form
                className='input__form'
                onSubmit={(e) => {
                    e.preventDefault()
                    addTodo(inputValue)
                }}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(event) => {
                        setInputValue(event.target.value)
                    }}
                />
                <button type="submit">+</button>
            </form>
            <ul className='uncompleted__section'>
                <header>
                    <h2>uncompleted</h2>
                    <hr />
                </header>
                {todoList.filter(todoList => todoList.isCompleted === false).map(filtered => (
                    <li key={filtered.id}>
                        <span>
                            <input
                                type="checkbox"
                                checked={filtered.isCompleted}
                                onChange={() => toggleTodo(filtered.id)}
                            />
                            <article>{filtered.text}</article>
                        </span>
                        <button onClick={() => removeTodo(filtered.id)}>&#10005;</button>
                    </li>
                ))}
            </ul>
            <ul className='completed__section'>
                <header>
                    <h2>completed</h2>
                    <hr />
                </header>
                {todoList.filter(todoList => todoList.isCompleted === true).map(filtered => (
                    <li key={filtered.id}>
                        <span>
                            <input
                                type="checkbox"
                                checked={filtered.isCompleted}
                                onChange={() => toggleTodo(filtered.id)}
                            />
                            <article>{filtered.text}</article>
                        </span>
                        <button onClick={() => removeTodo(filtered.id)}>&#10005;</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ListTodo
