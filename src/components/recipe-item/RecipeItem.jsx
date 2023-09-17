import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const RecipeItem = ({ recipe }) => {

    const { favorites, likes } = useSelector(state => state)

    const { toggleFavorites, addLike, disLike } = useActions()

    const isExist = favorites.some((fov) => fov.id === recipe.id)

    return (
        <div className="recipeItem">
            <h2 className="recipeName">
                {recipe.name}
            </h2>
            <button onClick={() => toggleFavorites(recipe)} className={isExist ? "btnAdd" : "btnFavorites"}>{isExist ? `Remove from` : `Add to`} favorites</button>
            <div className="likesBox">
                <button className="btnFavorites" onClick={() => addLike("LIKE")}>
                    <AiFillHeart />
                    {likes.length}
                </button>
                <button className="btnFavorites" onClick={() => disLike('DISLIKE')}>
                    <AiOutlineHeart />
                </button>
            </div>

        </div>
    )

}

export default RecipeItem