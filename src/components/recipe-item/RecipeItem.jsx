import { useSelector } from "react-redux"
import { useActions } from "../../hooks/useActions"

const RecipeItem = ({recipe}) => {

const {favorites} = useSelector(state => state)

const {toggleFavorites} = useActions()
 
const isExist = favorites.some((fov) => fov.id === recipe.id)

    return (
        <div className="recipeItem">
            <h2 className="recipeName">
                {recipe.name}
            </h2>
            <button onClick={() => toggleFavorites(recipe)} className={isExist ? "btnAdd" : "btnFavorites"}>{isExist ? `Remove from` : `Add to`} favorites</button>
        </div>
    )

}

export default RecipeItem