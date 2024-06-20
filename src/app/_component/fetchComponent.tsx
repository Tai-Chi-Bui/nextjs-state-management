'use client'
// FetchComponent.tsx
import React from 'react';
import { useStateContext, useFetchData } from '../_context/context';

const FetchComponent: React.FC = () => {
  const state = useStateContext();
  const fetchData = useFetchData();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <button 
        onClick={fetchData} 
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300"
      >
        Fetch Data
      </button>
      <div className="w-full max-w-md bg-white rounded shadow-lg p-6">
        {state.loading && <p className="text-gray-600">Loading...</p>}
        {state.error && <p className="text-red-500">Error: {state.error}</p>}
        {state.data && (
          <div>
            <p className="text-gray-800"><span className="font-semibold">User ID:</span> {state.data.userId}</p>
            <p className="text-gray-800"><span className="font-semibold">ID:</span> {state.data.id}</p>
            <p className="text-gray-800"><span className="font-semibold">Title:</span> {state.data.title}</p>
            <p className="text-gray-800"><span className="font-semibold">Completed:</span> {state.data.completed ? 'Yes' : 'No'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FetchComponent;
