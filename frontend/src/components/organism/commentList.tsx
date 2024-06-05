"use client"
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import CalificationStar from '../atoms/CalificationStar';
import { fetchData } from '../../utils/fetchData';
import { useAuthStore } from "@/store/auth-store"; // Ajusta la ruta según tu estructura de proyecto

const CommentList: React.FC<{ id: string }> = ({ id }) => {
  const [comments, setComments] = useState<{ comment: string, userRate: number }[]>([]);
  const [newComment, setNewComment] = useState<string>('');
  const [newRating, setNewRating] = useState<number>(0);
  const [isClient, setIsClient] = useState(false);

  // Recupera el token y el estado de autenticación desde el store
  const { jwt, isLogged, userId } = useAuthStore(state => ({
    jwt: state.jwt,
    isLogged: state.isLogged,
    userId: state.id
  }));

  useEffect(() => {

    setIsClient(true);
    // Recuperar los comentarios al cargar el componente
    const fetchComments = async () => {
      console.log("Fetching comments...");
      const data = await fetchData(`comment/allm/${id}/${true}`, 'GET', undefined, jwt);
      console.log("Fetched comments:", data);
      setComments(data);
    };

    fetchComments();
  }, [id, jwt]);

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(event.target.value);
  };

  const handleRatingChange = (rating: number) => {
    setNewRating(rating);
  }

  const handleCommentSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      //userId, movieId,Comment,UserRate

      const commentData = {
        userId,
        movieId: id, 
        comment: newComment,
        userRate: newRating,
      };

      console.log("CommentData--->", commentData);
      const data = await fetchData(`comment/create`, 'POST', commentData, jwt);
      if (data.success) {
        setComments([...comments, data.comment]);
        setNewComment('');
        setNewRating(0);
      } else {
        console.log(data.message);
      }
    }
  };

  if (!isClient) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Comentarios de la Película</h1>
      {isLogged ? (
        <form onSubmit={handleCommentSubmit}>
          <textarea
            value={newComment}
            onChange={handleCommentChange}
            placeholder="Escribe tu comentario aquí..."
            rows={4}
            cols={50}
          />
          <br />
          {/* <CalificationStar active rating={newRating} setRating={handleRatingChange} /> */}
          <button type="submit">Agregar comentario</button>
          
        </form>
      ) : (
        <p>Debes estar autenticado para dejar un comentario.</p>
      )}
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            {comment.comment} - {comment.userRate} estrellas
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
