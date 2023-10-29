import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "./features/Posts";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const postList = useSelector((state) => state.posts.value);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addPost({
        id: postList.length,
        name: name,
        content: content,
      })
    );
    setName("");
    setContent("");
  };

  return (
    <div className="App">
      <div>
        <h1>React-Redux掲示板</h1>
        <div className="addPost">
          <input
            type="text"
            placeholder="お名前"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="投稿内容"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={handleClick}>投稿</button>
          <hr />
        </div>
        <div className="displayPosts">
          {postList.map((post) => (
            <div key={post.id} className="post">
              <h1 className="postName">{post.name}</h1>
              <h1 className="postContent">{post.content}</h1>
              <button onClick={() => dispatch(deletePost({ id: post.id }))}>
                削除
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
