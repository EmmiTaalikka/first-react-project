import { useState } from 'react'
import './App.css'
import ReadingGoal from './ReadingGoal'

function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isGoalVisible, setIsGoalVisible] = useState(true)

  function handleReadPages() {
    setCurrentPage((page) => page + 10)
  }

  function handleDismiss() {
    console.log('Reading goal dismissed')
    setIsGoalVisible(false)
  }

  return (
    <main className="app">
      {isGoalVisible && (
        <ReadingGoal
          currentPage={currentPage}
          goal={50}
          onReadPages={handleReadPages}
          onDismiss={handleDismiss}
        />
      )}
    </main>
  )
}

export default App
