import styles from "./Categories.module.css"

const Categories = ({categories, selectedCategories, setSelectedCategories}) => {

    // const categories = [
    //   { name: "Playa", icon: "/playas.png" },
    //   { name: "Montaña", icon: "/montana.png" },
    //   { name: "Nevada", icon: "/nevadas.png" },
    //   { name: "Selva", icon: "/selva.png" },
    //   { name: "Bosques", icon: "/bosques.png" },
    //   { name: "Campo", icon: "/campo.png" },
    // ];
    const toggleSelected = (category) => {
      if (selectedCategories.includes(category)) {
        setSelectedCategories(selectedCategories.filter((selectedCategory) => selectedCategory !== category));
      } else {
        setSelectedCategories([...selectedCategories, category]);
      }
    }
  return (
    <div className={styles.categoriesContainer}>
        <div className={styles.categories}>
          {categories.map((category, index) => (
            <button key={index} style={{animationDelay:  `${index * 70}ms`}} className={`${styles.categoryButton} ${selectedCategories.includes(category) && styles.selected}`} onClick={() => toggleSelected(category)}>
              {/* <img
                src={category.icon}
                alt={category.name}
                className={styles.categoryIcon}
              /> */}
              {category}
            </button>
          ))}
          {selectedCategories.length > 0 && (
            <button className={styles.clearButton} onClick={() => setSelectedCategories([])}>x</button>
          )}
        </div>
      </div>
  )
}

export default Categories
