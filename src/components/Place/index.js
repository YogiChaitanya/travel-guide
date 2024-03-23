import './index.css'

const Place = props => {
  const {placeDetails} = props
  const {name, imageUrl, description} = placeDetails

  return (
    <li className="list-card">
      <img src={imageUrl} className="place-image" alt={name} />
      <h1 className="heading2">{name}</h1>
      <p className="paragraph2">{description}</p>
    </li>
  )
}

export default Place
