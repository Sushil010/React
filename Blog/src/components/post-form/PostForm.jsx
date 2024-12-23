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
            const file = data.image[0] ? service.uploadFile(data.image[0]) :""

            //the post.image is the image of the post
            //the image within post will be indicated later

            if (file){
                service.deleteFile(post.image)
            }

        }
    } 

  return (
    <div>PostForm</div>
  )
}

export default PostForm