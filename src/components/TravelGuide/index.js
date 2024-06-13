import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PlaceDetails from '../PlaceDetails'
import {
  TravelGuideContainer,
  ResponsiveContainer,
  Heading,
  PlacesList,
} from './styledComponent'

class TravelGuide extends Component {
  state = {places: [], isLoading: true}

  componentDidMount() {
    this.getTravelPlaces()
  }

  getTravelPlaces = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.packages.map(eachPlace => ({
        id: eachPlace.id,
        name: eachPlace.name,
        imageUrl: eachPlace.image_url,
        description: eachPlace.description,
      }))
      this.setState({places: updatedData, isLoading: false})
    }
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader color="#00BFFF" type="TailSpin" height={50} width={50} />
    </div>
  )

  render() {
    const {places, isLoading} = this.state
    console.log(places)
    return (
      <TravelGuideContainer>
        <ResponsiveContainer>
          <Heading>Travel Guide</Heading>
          <PlacesList>
            {isLoading
              ? this.renderLoading()
              : places.map(eachPlace => (
                  <PlaceDetails key={eachPlace.id} places={eachPlace} />
                ))}
          </PlacesList>
        </ResponsiveContainer>
      </TravelGuideContainer>
    )
  }
}

export default TravelGuide
