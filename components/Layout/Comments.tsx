// import { getServerSession } from "next-auth";
import Comment from "../Comment";
import CommentForm from "../CommentForm";

function Comments(comments: any) {
  console.log(comments, "from the tab comments");

  return (
    <section className="flex justify-start mt-5">
      <div className="flex items-center flex-col justify-start text-left w-full space-y-3">
        <CommentForm />
        <div className="flex justify-start w-full pt-2 pb-2">
          <span className="font font-semibold text-xs text-left ml-0">
            87 comments
          </span>
        </div>
        <section className="w-full">
          {comments.comments
            .sort((a: any, b: any) => b.createdAt - a.createdAt)
            .map((comment: any) => (
              <Comment key={comment.id} comment={comment} />
            ))}
        </section>
      </div>
    </section>
  );
}

export default Comments;
