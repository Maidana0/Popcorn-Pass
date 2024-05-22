package com.s1511.Ticketcine.application.implementations;
import com.s1511.Ticketcine.application.dto.comment.CreateDtoComment;
import com.s1511.Ticketcine.application.dto.comment.ReadDtoComment;
import com.s1511.Ticketcine.application.dto.comment.UpdateDtoComment;
import com.s1511.Ticketcine.application.mapper.CommentMapper;
import com.s1511.Ticketcine.domain.entities.Comment;
import com.s1511.Ticketcine.domain.entities.User;
import com.s1511.Ticketcine.domain.repository.CommentRepository;
import com.s1511.Ticketcine.domain.repository.UserRepository;
import com.s1511.Ticketcine.domain.services.CommentService;
import jakarta.persistence.EntityExistsException;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {
    public final CommentRepository commentRepository;
    public final CommentMapper commentMapper;
    public final UserRepository userRepository;
    //public final MovieRepository movieRepository;

    @Transactional
    @Override
    public ReadDtoComment createComment(CreateDtoComment createDtoComment) {
        var commentAlreadyExists = commentRepository.findByUserId(createDtoComment.userId());
        if(commentAlreadyExists.isPresent()){
            throw new EntityExistsException("¡Ya has comentado esta película!"); }

        Comment comment = this.commentMapper.createDtoToComment(createDtoComment);
        comment.setActive(Boolean.TRUE);
        comment.setDate(LocalDateTime.now());
        var commentAdded = commentRepository.save(comment);
        return commentMapper.commentToReadDto(commentAdded);
    }

    @Override
    public ReadDtoComment readCommentByCommentId(String id, Boolean active) {
        Comment comment = commentRepository.findByIdAndActive(id, active)
                .orElseThrow(() -> new EntityNotFoundException(id));

        return commentMapper.commentToReadDto(comment);
    }

    @Override
    public List<ReadDtoComment> readAllCommentByUserIdAndActive(String userId, Boolean active) {
        userRepository.findById(userId).orElseThrow(() -> new EntityNotFoundException(userId));
        List<Comment> commentList = commentRepository
                .findAllCommentByUserIdAndActive(userId, active);
        return commentMapper.commentListToReadDtoList(commentList);
    }

    @Override
    public List<ReadDtoComment> readAllCommentByMovieIdAndActive(String movieId, Boolean active) {
        //movieRepository.findById(movieId).orElseThrow(() -> new EntityNotFoundException(movieId));
        List<Comment> commentList = commentRepository
                .findAllCommentByMovieIdAndActive(movieId, active);
        return commentMapper.commentListToReadDtoList(commentList);
    }

    @Transactional
    @Override
    public ReadDtoComment updateComment(UpdateDtoComment updateDtoComment) {
        Comment comment = commentRepository.findByIdAndActive(updateDtoComment.id(), true)
                .orElseThrow(() -> new EntityNotFoundException(updateDtoComment.id()));

            if (updateDtoComment.comment() != null){
                comment.setComment(updateDtoComment.comment());
            }

        this.commentRepository.save(comment);
        return commentMapper.commentToReadDto(comment);
    }

    @Transactional
    @Override
    public Boolean toggleComment(String id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(id));
        comment.setActive(!comment.getActive());
        commentRepository.save(comment);
        return true;
    }
}