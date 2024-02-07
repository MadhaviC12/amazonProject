import React, { useState, useEffect } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };
    fetchComments();
  }, []);

  return (
    <div className="user_profile">
      <h2>user profile</h2>
      <table className="comment_table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
              <td>{comment.body}</td>
              {/* <strong>{comment.name}</strong> - {comment.body} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserProfile;
