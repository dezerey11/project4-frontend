import React, { useEffect, useState } from "react";
import { GlobalCtx } from "../App";

const SinglePost = (props) => {
  const { gState } = React.useContext(GlobalCtx);

  const [post, setPost] = useState(null);

  const getPost = () => {
    // fetch makes a get request by default
    fetch(gState.url + "posts/" + props.match.params.id)
      .then((response) => response.json())
      .then((data) => setPost(data));
  };

  useEffect(() => {
    getPost();
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return <div>{post.title}</div>;
};
export default SinglePost;
