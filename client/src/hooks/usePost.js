import { useState, useEffect } from "react";
import axios from "axios";

const usePost = (postname) => {
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const { data } = await axios.get("/api/v1/posts", {
      params: {
        postname,
      },
    });
    setPostData(data);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return [postData, loading];
};

export default usePost;
