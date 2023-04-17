import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FoodData } from './interface/FoodData'
import { Card } from './components/card/card'
import { useFoodData } from './hooks/useFoodData'
import { Modal } from './components/modal/modal'

function App() {
  const { data } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="App">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map(food =>
          <Card
            title={food.title}
            price={food.price}
            image={food.image}
          />
        )}
      </div>
      {isModalOpen && <Modal closeModal={handleOpenModal}/> }
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App
