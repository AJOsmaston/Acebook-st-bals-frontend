import React, { useEffect, useState } from "react";

// const Post = (props) => {
//   return <p>{props.message}</p>;
// }

const Data = () => {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    fetch("https://the-acebook-api-test.herokuapp.com/api/v1/posts/")
      .then(response => {
        return response.json()
      })
      .then(data => 
        setPost(data))
      .finally()

    });


console.log(post);

return (
  <>
  lol
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
