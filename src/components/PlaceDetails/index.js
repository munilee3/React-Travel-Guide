import {
  PlaceContainer,
  Placeimg,
  PlaceDetailContainer,
  PlaceName,
  PlaceDescription,
} from './styledComponent'

const PlaceDetails = props => {
  const {places} = props
  const {name, imageUrl, description} = places
  console.log(imageUrl)
  return (
    <PlaceContainer>
      <Placeimg src={imageUrl} alt={name} />
      <PlaceDetailContainer>
        <PlaceName>{name}</PlaceName>
        <PlaceDescription>{description}</PlaceDescription>
      </PlaceDetailContainer>
    </PlaceContainer>
  )
}

export default PlaceDetails
