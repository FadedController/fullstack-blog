import React from "react";
import usePost from "./hooks/usePost";
import Markdown from "markdown-to-jsx";

const App = () => {
  const [postData, postLoading] = usePost("this-article");
  return (
    <div>
      {!postLoading && (
        <>
          <h1>{postData.title}</h1>
          <Markdown>{postData.markdown}</Markdown>
        </>
      )}
    </div>
  );
};

export default App;
