import { useEffect } from "react";
import CommentCard from "./CommentCard";

const Comments = ({ newArticle, articleComments, setArticleComments }) => {


  useEffect(() => {
    fetch(
      `https://as-nc-news.herokuapp.com/api/articles/${newArticle.article_id}/comments`
    )
      .then((res) => res.json())

      .then(({ comments }) => setArticleComments(comments));
  }, [newArticle.article_id, setArticleComments]);

  return (
    <div className="comments_CommentsList">
      {articleComments === undefined ? (
        <h3 className="articlePage_comments_noComments">
          Currently no comments for this article. Post comment below
        </h3>
      ) : (
        <div className="articlePage_comments">
          <h3 className="articlePage_comments_header">Comments</h3>

          {articleComments.map((comment) => {
            return <CommentCard comment={comment} setArticleComments={setArticleComments} key={comment.comment_id} />;
          })}
        </div>
      )}

    </div>
  );
};

export default Comments;
