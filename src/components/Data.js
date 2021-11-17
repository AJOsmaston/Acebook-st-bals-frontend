import React, { useEffect, useState } from "react";

// const Post = (props) => {
//   return <p>{props.message}</p>;
// }

const Data = () => {
  const [post, setPost] = useState("");
  
  useEffect(() => {
    const url = "https://the-acebook-api-test.herokuapp.com/api/v1/posts/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setPost(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

console.log(post);

return  Object.keys(post).map((index) => {
  return(
    <p key={index} className={"post- " + index}>
        {post[index].message}
    </p>
  )
})
};

export default Data;
