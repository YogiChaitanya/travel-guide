import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Place from '../Place'
import './index.css'

class TravelGuide extends Component {
  state = {
    placesData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getPlacesData()
  }

  getPlacesData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    console.log(data)

    const convertedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
    }))

    this.setState({
      placesData: convertedData,
      isLoading: false,
    })
  }

  render() {
    const {placesData, isLoading} = this.state
    return (
      <div className="travel-guide-container">
        <h1 className="heading1">Travel Guide</h1>

        <div className="travel-card">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul className="list-container">
              {placesData.map(eachPlace => (
                <Place key={eachPlace.id} placeDetails={eachPlace} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
