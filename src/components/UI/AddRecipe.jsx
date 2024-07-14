import React, { useState } from 'react'
import axios from 'axios'

import { FiX } from 'react-icons/fi'
import UploadBtn from './UploadBtn'

import iziToast from 'izitoast' // yarn add izitoast
import 'izitoast/dist/css/iziToast.min.css'
import Loader from './Loader'

const KEY = 'f68a51f7-6ee3-4af4-ba41-286d14da8a66'

const AddRecipe = ({ addRecipe, setAddRecipe }) => {
  const [isLoading, setIsLoading] = useState(false) // Handle Spinner or Loading message
  const [error, setError] = useState('') // Handle Error message
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    image_url: '',
    publisher: '',
    preparationTime: '',
    servings: '',
    ingredient1: '',
    ingredient2: '',
    ingredient3: '',
    ingredient4: '',
    ingredient5: '',
    ingredient6: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  //! Example of NewRecipe data structure
  //   const NewRecipe = {
  //     cooking_time: 60,
  //     id: "5ed6604591c37cdc054bcd45",
  //     image_url: "http://forkify-api.herokuapp.com/images/spring_pasta_recipe8286.jpg",
  //     ingredients: [
  //       { quantity: 8, unit: "oz", description: "/ 225 g cooked leftover pasta" },
  //       { quantity: 2, unit: "", description: "eggs" },
  //       { quantity: null, unit: "", description: "Fine grain sea salt" },
  //       { quantity: 1, unit: "tbsp", description: "olive oil" },
  //       { quantity: 1, unit: "tbsp", description: "unsalted butter" },
  //       { quantity: 3, unit: "", description: "big handfuls of sliced asparagus and/or pea shoots…hredded greens - anything quick cooking and fresh" },
  //       { quantity: null, unit: "", description: "Chopped avocado" },
  //       { quantity: null, unit: "", description: "Chopped herbs" }
  //     ],
  //     publisher: "101 Cookbooks",
  //     servings: 4,
  //     source_url: "http://www.101cookbooks.com/archives/spring-pasta-recipe.html",
  //     title: "Spring Pasta"
  //   };

  //! FOR INPUTS VALIDATION BEFORE Pushing THE DATA
  const validateForm = () => {
    const requiredFields = [
      'title',
      'url',
      'publisher',
      'preparationTime',
      'servings',
    ]
    const invalidFields = requiredFields.filter((field) => !formData[field])

    if (invalidFields.length > 0) {
      setError(
        `Please fill in the following fields: ${invalidFields.join(', ')}`
      )
      return false
    }

    setError('')
    return true
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setError('')

    const ingredients = []
    for (let i = 1; i <= 6; i++) {
      const [quantity, unit, description] =
        formData[`ingredient${i}`]?.split(',')
      if (quantity && unit && description) {
        ingredients.push({ quantity: parseFloat(quantity), unit, description })
      }
    }

    // const NewRecipe = {
    //   cooking_time: formData.preparationTime || 60,
    //   id: Date.now().toString(), // Generate a unique ID (you might want to use a more robust method)
    //   image_url: formData.image_url || '',
    //   ingredients,
    //   publisher: formData.publisher || '',
    //   servings: formData.servings || 4,
    //   source_url: formData.url || '',
    //   title: formData.title || 'Untitled Recipe',
    // }

    const NewRecipe = {
      id: Date.now().toString(), 
      title: formData.title,
      source_url: formData.url,
      image_url: formData.image_url,
      publisher: formData.publisher,
      cooking_time: parseInt(formData.preparationTime),
      servings: parseInt(formData.servings),
      ingredients: ingredients,
    }

    console.log(NewRecipe)

    axios.post(`https://forkify-api.herokuapp.com/api/v2/recipes?key=${KEY}`, NewRecipe)
      .then(response => {
        setIsLoading(false);
        // console.log(response);
        iziToast.success({
          title: 'Success',
          message: 'Recipe added successfully!',
          position: 'topRight',
          timeout: 3000,
        });
        setFormData({ // for cleaning inputs
          title: '',
          url: '',
          image_url: '',
          publisher: '',
          preparationTime: '',
          servings: '',
          ingredient1: '',
          ingredient2: '',
          ingredient3: '',
          ingredient4: '',
          ingredient5: '',
          ingredient6: ''
        });
      })
      .catch(err => {
        setIsLoading(false);
        setError("An error occurred. Please try again later.");
        console.error(err);
      });
  }

  return (
    <div className='w-full h-full fixed top-0 right-0 z-20 backdrop-blur-sm bg-black/70'>
      <form
        className='w-[300px] sm:w-[400px] md:w-[800px] absolute top-1/2 left-1/2 bg-white z-20 rounded-lg transform -translate-x-1/2 -translate-y-1/2 p-5 '
        onSubmit={handleSubmit}
      >
        <div
          onClick={() => setAddRecipe(false)}
          className='absolute  right-2 top-4 rounded-sm cursor-pointer mr-2 z-20 ease-in-out duration-500'
        >
          <FiX size={25} color='black' />
        </div>

        <div className='mt-10 mb-8 px-5  w-full flex gap-20'>
          {/* RECIPE DATA  */}

          <div className='flex flex-col gap-4 w-[50%]'>
            <h3 className='text-xl text-center font-semibold text-color-primary mb-6'>
              RECIPE DATA
            </h3>

            <input
              type='text'
              name='title'
              placeholder='Title'
              value={formData.title}
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='text'
              name='url'
              placeholder='URL'
              value={formData.url}
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='text'
              name='image_url'
              placeholder='Image URL'
              value={formData.image_url}
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='text'
              name='publisher'
              placeholder='Publisher'
              value={formData.publisher}
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='number'
              min={1}
              name='preparationTime'
              placeholder="Preparation Time 'Min'"
              value={formData.preparationTime}
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='number'
              min={1}
              name='servings'
              placeholder="Servings '4'"
              value={formData.servings}
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />
          </div>

          {/* INGREDIENTS  */}

          <div className='flex flex-col gap-4 w-[50%]'>
            <h3 className='text-xl text-center font-semibold text-color-primary mb-6'>
              INGREDIENTS
            </h3>

            <input
              type='text'
              // defaultValue='0.5,kg,Rice'
              value={formData.ingredient1}
              name='ingredient1'
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='text'
              value={formData.ingredient2}
              name='ingredient2'
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='text'
              value={formData.ingredient3}
              name='ingredient3'
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='text'
              value={formData.ingredient4}
              name='ingredient4'
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='number'
              value={formData.ingredient5}
              name='ingredient5'
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />

            <input
              type='number'
              value={formData.ingredient6}
              name='ingredient6'
              placeholder="Format: 'Quantity,Unit,Description'"
              onChange={handleChange}
              className='text-sm text-gray-500 w-full p-3  focus:outline-none rounded-md border focus:ring-2 focus:bg-[#f6cfcc7b] ring-color-primary transition-all ease-in-out duration-100'
            />
          </div>
        </div>

        {!isLoading && <UploadBtn />}

        {isLoading && <Loader />}
        {error && (
          <div className='flex justify-center items-center mt-6'>
            <div className=' bg-[#f8d7da] border border-[#f5c6cb] rounded-md p-4 text-center max-w-[300px] '>
              <p className='text-[#721c24]'>{error}</p>
            </div>
          </div>
        )}
      </form>
    </div>
  )
}

export default AddRecipe
