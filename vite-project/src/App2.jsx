function App() {
    const  handleMsg= (message) =>{
        alert("Message from child:"+  message);
    };
    return <Child sendMsg={handleMsg} />
}

function Child(props) {
    return(
        <button onClick={()=> props.sendMsg("Hello")}>
            send message
        </button>
    );
}

export default App;