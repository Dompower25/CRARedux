import { useState } from 'react'

import RecipeItem from './components/recipe-item/RecipeItem'
import User from './components/user/User'

function App() {



  return (
    <section>
      <header>
        <User />
      </header>

      <div className='recipeBlock'>

        <RecipeItem recipe={{
          id: 1,
          name: "Pork stake",
        }} />
        <RecipeItem recipe={{
          id: 2,
          name: "Pasta",
        }} />
        <RecipeItem recipe={{
          id: 3,
          name: "Octopus",
        }} />
      </div>
    </section>
  )
}

export default App
