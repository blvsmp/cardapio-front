import "./modal.css"

import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMudate"
import { FoodData } from "../../interface/FoodData"

interface InputProps {
  label: string,
  value: string | number,
  updateValue(value: any): void

}

interface ModalProps {
  closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
  return(
    <>
      <label>{label}</label>
      <input value={value} onChange={event => updateValue(event.target.value)}></input>
    </>
  )
}

export function Modal({ closeModal }: ModalProps ) {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState("")
  const { mutate, isSuccess, isLoading } = useFoodDataMutate()

  const submit = () => {
    const foodData: FoodData = {
      title,
      price,
      image
    }

    mutate(foodData)
  }

  useEffect(() => {
    if(!isSuccess) return
    closeModal()
  }, [isSuccess])

  return(
    <div className="modal-overlay">
      <div className="modal-body">
        <h2>Cadastre um novo item no cardápio</h2>
        <form className="input-container">
          <Input label="Nome do prato" value={title} updateValue={setTitle} />
          <Input label="Preço" value={price} updateValue={setPrice} />
          <Input label="Link da imagem" value={image} updateValue={setImage} />
          <button onClick={submit} className="btn-secondary">
            {isLoading ? "Postando..." : "Postar"}
          </button>
        </form>
      </div>
    </div>
  )
}