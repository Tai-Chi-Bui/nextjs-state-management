'use client'

import { useTaskStore } from '../_lib/store'

export default function NewTodoDialog() {
  const addTask = useTaskStore(state => state.addTask)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const { title, description } = Object.fromEntries(formData)

    if (typeof title !== 'string' || typeof description !== 'string') return

    addTask(title, description)
  }

  return (
    <div className='max-w-md mx-auto p-6 bg-white rounded-lg shadow-md'>
      <form
        id='todo-form'
        className='grid gap-6'
        onSubmit={handleSubmit}
      >
        <div className='grid grid-cols-1 gap-4'>
          <input
            id='title'
            name='title'
            placeholder='Todo title...'
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
          />
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <input
            id='description'
            name='description'
            placeholder='Description...'
            className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
          />
        </div>
        <button
          type='submit'
          className='w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-black'
        >
          Add Task
        </button>
      </form>
    </div>
  )
}
