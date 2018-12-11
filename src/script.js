// import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import FrontEnd from './frontend.js'
const url=("http://localhost:5000/")

// fetch("http://localhost:3000/")
//     .then postComments(url="http://localhost:3000/")
//     return fetch("http://localhost:3000/", {})

//function for showing all comments on server
const getComments = async() => {
    const comment = await fetch("http://localhost:5000/comment") 
    .then((response)=> {
        return response.json();
    })
    .then((myJson) => {
    return myJson
    });
    
    return comment
}
const getCommentsByID=async (_id)=>{
    const comment = await fetch(`http://localhost:5000/comment/${_id}`, 
    {
        method: 'get',
        cors: true,
        headers: {
        'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then((response)=> {
    return response.json();
    })
    .then((myJson)=> {
    return myJson
    }).catch((err)=>{console.log(err)})
    return comment;
}

//function to post a new comment *needs seperate button*
const newComment = async (data) => {
    const comments = await fetch("http://localhost:5000/newcomment",
        {
            method: 'post',
            cors: true,
            headers: {
                'Content-type': 'application/json; charset-UTF-8',
                // 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        }
        ).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
        return comments;
}
//function to update/edit a comment
const updateComment = async (data) => {
    console.log(data)
    // change the end to just {id} to match api
    const comments = await fetch(`${"http://localhost:5000/comment/content/"}${data._id}`, 
    {
        method: 'PUT',
       // cors: true,
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        //'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify(data)
    }
    ).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
    return comments;
}

//function to delete a comment
const deleteComment = async (_id) => {
    const comments = await fetch(`${"http://localhost:5000/comment/"}${_id}`, 
    {
        method: 'DELETE',
        cors: true,
        // headers: {
        //   'Content-type': 'application/json; charset=UTF-8'
        // },
        // body: JSON.stringify(data)
    }
    ).then((result)=>{console.log(`${result} comment deleted`)}).catch((err)=>{console.log(err)})
    return comments;
}

//  export default class apiCall extends Component {getComments}
export {
    getComments,
    getCommentsByID,
    newComment,
    updateComment,
    deleteComment
}