function App() {
  // MAIN APP DATA
  // 1.5 CREATE ONE OBJECT
  const course = {
    name: "Half Stack aplication development",
    currentStudents: 250,
    // 1.3
    // const part1 = {
    //   name: 'Fundamentals of React',
    //   exercises: 10
    // }
    // const part2 = {
    //   name: 'Using props to pass data',
    //   exercises: 7
    // }
    // const part3 = {
    //   name: 'State of a component',
    //   exercises: 14
    // }
    // RESTRUCTURED DATA ON ARRAY OF OBJECTS
    // REMEMBER USE NOTATION parts[0].name 
    // 1.4 ➕ REDUCED 
    parts: [
      { name: "Fundamentals of React", exercises: 10 },
      { name: "Using props to pass data", exercises: 7 },
      { name: "State of a component", exercises: 14 }
    ]
  }


  // RENDERING
  return (
    <>
      <Header name={course.name} students={course.currentStudents} />
      {/* 1.4  💿 THERE IS A BETTER WAY TO REDUCE THIS?*/}
      <Content name={course.parts[0].name} exercises={course.parts[0].exercises} />
      <Content name={course.parts[1].name} exercises={course.parts[1].exercises} />
      <Content name={course.parts[2].name} exercises={course.parts[2].exercises} />
      <Total parts={course.parts} />
    </>
  )

  // COMPONENTS
  // 📀 DESTRUCTURING SYNTAX 
  function Header({ name, students }) {
    return (
      <>
        <h1>Welcome {name}</h1>
        <h2>Current students {students}</h2>
      </>
    )
  }
  function Content({ name, exercises }) {
    return (
      <>
        <p>{name} {exercises}</p>
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
    // console.log(parts)
    return (
      <p>Number of exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)
  }
}
export default App
