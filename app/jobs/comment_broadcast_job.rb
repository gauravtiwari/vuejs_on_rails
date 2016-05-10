class CommentBroadcastJob < ApplicationJob
  def perform(comment)
    ActionCable.server.broadcast "post:#{comment.post_id}:comments",
      comment: CommentsController.render('show', assigns: { comment: comment })
  end
end
