function ReadingGoal({ currentPage, goal, onReadPages, onDismiss }) {
  const progress = Math.min((currentPage / goal) * 100, 100)

  return (
    <section className="reading-goal" aria-labelledby="reading-goal-title">
      <button className="close-button" type="button" onClick={onDismiss}>
        x
      </button>
      <h1 id="reading-goal-title">Reading goal</h1>
      <h2>React basics</h2>
      <p>Keep track of your reading progress.</p>
      <progress value={progress} max="100">
        {progress}%
      </progress>
      <p>
        {currentPage} / {goal} pages
      </p>
      <button type="button" onClick={onReadPages}>
        Read 10 pages
      </button>
    </section>
  )
}

export default ReadingGoal
