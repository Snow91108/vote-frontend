import Child from './components/Child4';
function App() {
    const Greeting= {name:"john", age:23 }
    return(
        <div>
         <Child4 Greeting={Greeting.name} />
</div>
    )
}
export default App;