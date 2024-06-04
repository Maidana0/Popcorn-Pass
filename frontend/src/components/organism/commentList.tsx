"use client"
import { useState, ChangeEvent, FormEvent, SyntheticEvent } from 'react';
import CalificationStar from '../atoms/CalificationStar';

const CommentList: React.FC = () => {
  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(0)

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleRatingChange = (event: FormEvent<HTMLFormElement>, rating : number) => {
    setNewRating(rating)
  }

  const handleCommentSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div>
      <h1>Comentarios de la Película</h1>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          placeholder="Escribe tu comentario aquí..."
          rows={4}
          cols={50}
        />
        <br />
      
        <button type="submit">Agregar comentario</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
