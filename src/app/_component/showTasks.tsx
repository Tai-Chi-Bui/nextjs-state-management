'use client'

import { useTaskStore } from '../_lib/store'
import { useEffect, useMemo } from 'react'

export default function ShowTasks() {
  const tasks = useTaskStore(state => state.tasks)
  const status = 'TODO' // Directly set the status to 'TODO'
  
  const filteredTasks = useMemo(
    () => tasks.filter(task => task.status === status),
    [tasks, status]
  )

  useEffect(() => {
    useTaskStore.persist.rehydrate()
  }, [])

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='ml-1 font-serif text-2xl font-semibold'>TODO</h2>

      <div className='mt-3.5 h-full w-full rounded-xl bg-gray-700/50 p-4'>
        <div className='flex flex-col gap-4'>
          {filteredTasks.map(task => (
            <div className='border border-blue-300 p-2 rounded-lg'>
                <div>task title: {task.title}</div>
                <div>task description: {task.description}</div>
                <div>task status: {task.status}</div>
                <div></div>
            </div>
          ))}

          {filteredTasks.length === 0 && (
            <div className='mt-8 text-center text-sm text-gray-500'>
              <p>Create a new task</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
