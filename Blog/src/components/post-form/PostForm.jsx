import React, { useCallback } from 'react'
import {Button, Input, RTE,Select} from '../index'
import { useForm } from 'react-hook-form'
import { service } from '../../appwrite/config'
import { useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'

function PostForm({post}) {


    const {register,handleSubmit,watch,control,getValues,setValue}=
    useForm({
        defaultValues:{
            //use of ternary operator
            //title: post.title ? post.title : " "
            //logival or is used just to reduce verbosity
            //access the title property of post only if post is not null

            title:post?.title || "",
            content:post?.content || "",
            status:post?.status||"",
            slug:post?.slug || "",
        }
    })

    const navigate = useNavigate()
    const userData= useSelector(state=>state.auth.userData)

    //Function to handle form submission in case of new post or old posts

    const submit = async(data)=>{
        
        //check if post exists if yes update the post
        //if no create a new post

        if(post){
            //update the post

            //check if the image is changed
            //if changed delete the old image and upload the new image
            //if no image is uploaded just update the post

            const file = data.image[0] ? service.uploadFile(data.image[0]) :""

            //the post.featuredimage is the image of the post
            //the featuredImage already exists in the appwrite database.


            if (file){
                service.deleteFile(post.featuredImage)
            }

            //now update the post
            const dbPost = service.updatePost(post.$id,{
                ...data,
                
                //the featuredImage takes the value of the file if the file exists
                featuredImage: file?file.$id:undefined,

                

            })
            //if the post is successfully updated navigate to the post page
            if(dbPost){
                navigate(`/post/${post.slug}`)
            }

        }
        
        
        //if the post does not exist create a new post
        else{

        }
    } 

  return (
    <div>PostForm</div>
  )
}

export default PostForm