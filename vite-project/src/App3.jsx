function App() {
    const user= {name: "john Snow", age:23}
    return <Parent user={user} />
}
  function Parent({user}) {
    return<Child  user={user}/>
  }
  function Child({user}) {
    return<GrandChild user={user}/>
  }
  function GrandChild({user}) {
    return <h2>{user.name}, age is{user.age}</h2>
  }

  export default App;