import { useState } from 'react'
import './App.css'
import Producto from './components/Producto'
import Producto1 from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Producto />
      <Producto1 title="Producto 1" price="100" />
      <Producto1 title="Producto 2" price="200" />
      <Producto1 title="Producto 3" price="700" />
    </div>
  )
}

export default App
