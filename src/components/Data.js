import React, { useEffect, useState } from "react";

// const Post = (props) => {
//   return <p>{props.message}</p>;
// }

const Data = () => {
  const [posts, setPost] = useState([]);

  const fetchPosts = async () => {
    let result = await fetch("https://acebook-st-bals.herokuapp.com/api/v1/posts")
    let data = await result.json()
    return data
  }
  
  useEffect(() => {
    let getPosts = async () => {
      let postsFromAPI = await fetchPosts()
      setPost(postsFromAPI)
    }
    getPosts()
  }, []);

return (
  <>
    <div className="container">
      {posts.map((post, index) => {
        return(
          <div>
            <div key={"message" + index}>
              Message: {post.message}
            </div>
            <div key={"time" + index}>
              Created at: {post.created_at}
              </div>
            <div key={"userid" + index}>
              Created by: {post.user_id}
            </div>
          </div>
        )
      })}
    </div>
  </>
)

// return  Object.keys(post).map((index) => {
//   return(
//     <p key={index} className={"post- " + index}>
//         {post[index].message}
//     </p>
//   )
// })


};

export default Data;
