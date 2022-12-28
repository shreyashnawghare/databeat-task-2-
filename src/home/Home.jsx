import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext";
import "./home.css";


export default function Home() {
  const [blogs, setBlogs] = useState([]);
 
  const { logout } = useContext(AuthContext);
  useEffect( () => {
    async function fetchData() {
    try {
      const res = await axios.get(
        "https://newsapi.org/v2/everything?q=apple&apiKey=0b87f9e101da401cb29f65bc27e8caec"
      );
       setBlogs((prev) => {
        return [...new Set([...res.data.articles.map((blog) => {return blog})])]
      })
  
console.log(blogs)

   
    } catch (err) {
      console.log(err);

    }
  }
  fetchData()
  },[]);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div className="row">
    <div  className='homePage-bar'>
    <div className="heading">
        <span>TOP HEADLINES</span>
    </div>
    <div className="logout" onClick={e => onLogout(e)}>
        <button>Logout</button>
    </div>
    </div>

  {blogs.length>0 && blogs.map((blog, index) => {
    return(
      <div key={index} className="blog" >
       
        <img src={blog.urlToImage} alt="news" className="blog-image"></img>
        <div className="blog-data">
        <a style={{textDecorationColor:"black"}}href={blog.url} target="_blank" rel="noopener noreferrer">
          <span className="blog-title">{blog.title}</span>
          </a>
          <span className="blog-author">
            <b>Author : </b>
            {blog.author}
          </span>
          <span className="blog-description">
            <b>Description : </b>
            {blog.description}
          </span>
          <span className="blog-content">{blog.content}</span>
        </div>
      </div>
     
     
    )
      })} 
    </div>
  
  );
}
