class Comment < ApplicationRecord
  belongs_to :post

  after_commit { CommentBroadcastJob.perform_later(self) }
end
