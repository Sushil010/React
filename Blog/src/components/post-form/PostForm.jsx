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



  return (
    <div>PostForm</div>
  )
}

export default PostForm