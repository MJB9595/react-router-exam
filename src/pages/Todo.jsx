import React from 'react'

import { TodoProvider } from '../contexts/TodoContext'

import TodoHeader from '../components/TodoHeader'
import TodoEditor from '../components/TodoEditor'
import TodoList from '../components/TodoList'

import './TodoLayout.css' 

const Todo = () => {
  return (
    <section>
        <div>
            <TodoProvider>
                <div className='TodoContainer'>
                    <TodoHeader />
                    <TodoEditor />
                    <TodoList />
                </div>
            </TodoProvider>
        </div>
    </section>
  )
}

export default Todo