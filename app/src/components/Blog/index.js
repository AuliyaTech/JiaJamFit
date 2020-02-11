import React from 'react';
import API from "../../utils/API";
import "./style.css";

function Blog() {
    const Blog = API.getBlog[0].content

    return(
        <div className="blog heading">
            <h1>See my Latest Post... </h1>

            {
                Blog.map(post => {
                    return(
                        <div>
                            <h6>{post.blog_title}</h6>
                            <h10>Published on {post.date_time}</h10>
                            <p>{post.blog_post}</p>
                        </div>
                    )
                })
            }
            </div>

    )
}

export default Blog;