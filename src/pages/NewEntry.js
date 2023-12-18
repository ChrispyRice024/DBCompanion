import {React, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function NewEntry() {
    const [tags, setTags] = useState([])
    const [tagInput, setTagInput] = useState('')
    
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')

    const fullDetails = {
        image: image,
        desc: desc,
        name: name,
        price: price,
        tags:tags
    }
    const url = 'https://dark-erin-goshawk-toga.cyclic.app/item'

    const createImage = (newImage) => axios.post(url, newImage)

    const createPost = async (post) => {
        try{
            await createImage(post)
        }catch(err){
            console.error('error', err)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost(fullDetails)
    }

    const handleChange = (e) => {

        const convertFile = (file) => {

            return new Promise((resolve, reject) => {
                const fileReader = new FileReader()
                fileReader.readAsDataURL(file)

                fileReader.onload = () => {
                    resolve(fileReader.result)
                }
                fileReader.onerror = (err) => {
                    reject(err)
                }
            })


        }
        
        if(e.target.name === 'tags'){
            setTagInput(e.target.value)

            const tagArray = tagInput.split(',').map(tag => tag.trim())
            setTags(tagArray)

        }else if(e.target.name === 'image'){
            const file = e.target.files[0]

            const handleConversion = async (file) => {

                const convertedFile = await convertFile(file)

                setImage(convertedFile)
            }
            handleConversion(file)
                
        }else if(e.target.name === 'name'){
            setName(e.target.value)
        }else if(e.target.name === 'description'){
            setDesc(e.target.value)
        }else if(e.target.name === 'price'){
            setPrice(e.target.value)
        }

        console.log('fullDetails', fullDetails)
    }
// console.log('tags', tags)


    return(
        <div id='formPage'>
            <form id='entry' onSubmit={handleSubmit}>
                <label for='image'>Image</label>
                <input type='file' name='image' onChange={handleChange} />

                <label for='name'>Name</label>
                <input type='text' name='name' onChange={handleChange} />

                <label for='description'>Description</label>
                <textarea name='description' rows='4' columns='50' onChange={handleChange} />

                <label for='price'>Price $</label>
                <input name='price' type='number' step='0.01' pattern='\d+(\.\d{1,2})?' min='0.00' onChange={handleChange} />

                <label htmlFor='tags'>Tags</label>
                <input name='tags' type='text' onChange={handleChange}/>

                <input type='submit' />
            </form>
        </div>
    )
}