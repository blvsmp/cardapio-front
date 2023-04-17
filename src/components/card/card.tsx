import "./card.css"

interface CardProps {
  title: string,
  price: number,
  image: string
}

export function Card({ title, price, image } : CardProps) {
  return(
    <div className="card">
      <img src={image} />
      <h2>{title}</h2>
      <p><b>Valor: R$ {price},00</b></p>
    </div>
  )
}