function App() {
  // APP DATA
  const name = "Half Stack aplication development"
  const currentStudents = 250
  // const part1 = "Fundamentals of React"
  // const exercises1 = 10
  // const part2 = "Using props to pass data"
  // const exercises2 = 7
  // const part3 = "State of component"
  // const exercises3 = 14

  // RESTRUCTURED DATA ON ARRAY OF OBJECTS
  const parts = [
    // REMEMBER USE NOTATION parts[0].name 
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 }
  ]

  // RENDERING
  return (
    <>
      <Header name={name} students={currentStudents} />
      {/* 1.1 */}
      {/* <Content
        part1={part1} part2={part2} part3={part3} exercises1={exercises1}
        exercises2={exercises2} exercises3={exercises3} /> */}
      {/* 1.2 */}
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
}

// COMPONENTS
// ADDING DESTRUCTURING SYNTAX
function Header({ name, students }) {
  return (
    <>
      <h1>Welcome {name}</h1>
      <h2>Current students {students}</h2>
    </>
  )
}
function Content({ parts }) {
  // console.log(parts)
  return (
    <>
      {/* 1.1 */}
      {/* <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p> */}
      {/* 1.2 */}
      <Part name={parts[0].name} exercise={parts[0].exercises} />
      <Part name={parts[1].name} exercise={parts[1].exercises} />
      <Part name={parts[2].name} exercise={parts[2].exercises} />
    </>
  )
}
function Part({ name, exercises }) {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}
function Total({ parts }) {
  return (
    <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)
}

export default App
