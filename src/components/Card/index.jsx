import { Link } from "react-router-dom"
import styles from "./Card.module.css"

const Card = ({id, title, description, images, pricePerNight}) => {

  return (
    <div className={styles.container}>
      <Link to={`/cabin/${id}`}>
        <div className={styles.imageContainer}>
          {images && images.length > 0 && (
            <img
            className={styles.image}
              src={images[0].url}
              alt={title}
            />
          )}
        </div>
        </Link>
        <div className={styles.text}>  
          <h3 className={styles.title}>{title}</h3>
      
          <p className={styles.description}>{description}</p>
          <span className={styles.price}>Precio por noche ${pricePerNight}</span>
        </div>
        
      
    </div>
  )
}

export default Card
