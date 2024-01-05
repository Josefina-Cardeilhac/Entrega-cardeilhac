import ItemListContainer from "./componentes/ItemListContainer"
import './App.css'

function App() {
  return (
    <>
      <div id="app">
       <p>
        hola mundo
       </p>
       <ItemListContainer saludo ="prop desde app"/>
       <ItemListContainer saludo ="otra prop desde app"/>
      </div>
      
    </>
  )
}

export default App
