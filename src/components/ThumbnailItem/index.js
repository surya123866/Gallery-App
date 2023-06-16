import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, changeAltText, changeImage} = props
  const {thumbnailUrl, imageAltText, imageUrl, thumbnailAltText} = imageDetails

  const handleClick = () => {
    changeImage(imageUrl)
    changeAltText(imageAltText)
  }

  return (
    <li onClick={handleClick}>
      <button>
        <img className="thumbnail" alt={thumbnailAltText} src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
