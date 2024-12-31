function App() {
  // APP DATA
  const courseInfo = "Half Stack aplication development"
  const currentStudents = 250
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of component"
  const exercises3 = 14

  // RENDERING
  return (
    <>
      <Header courseName={courseInfo} currentStudents={currentStudents} />
      <Content
        part1={part1} part2={part2} part3={part3} exercises1={exercises1}
        exercises2={exercises2} exercises3={exercises3} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </>
  )
}

// COMPONENTS
function Header(props) {
  return (
    <>
      <h1>Welcome {props.courseName}</h1>
      <h2>Current students {props.currentStudents}</h2>
    </>
  )
}
function Content(props) {
  console.log(props)
  return (
    <>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
    </>
  )
}
function Total(props) {
  return (
    <p>Number of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>)
}

export default App
