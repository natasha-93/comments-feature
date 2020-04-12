import React, { useState } from "react";

function App() {
  const [newComment, setNewComment] = useState("");
  const [newAuthor, setNewAuthor] = useState("");
  const [comments, setComments] = useState([{ text: "Hello", author: "Me" }]);
  return (
    <div style={{ padding: "1.5rem", margin: "1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setComments([...comments, { text: newComment, author: newAuthor }]);

          setNewComment("");
          setNewAuthor("");
        }}
      >
        <textarea
          style={{
            padding: "1.5rem",
            margin: "1rem",
            display: "block",
            resize: "none",
          }}
          required={true}
          placeholder="Add Comment here"
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        />
        <input
          style={{ padding: "1.5rem", margin: "1rem" }}
          required={true}
          placeholder="Add Author here"
          value={newAuthor}
          onChange={(e) => {
            setNewAuthor(e.target.value);
          }}
        />
        <button>Add Comment</button>
      </form>
      {comments.map((comment, i) => (
        <div key={i}>
          <p>
            {comment.text} - {comment.author}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
