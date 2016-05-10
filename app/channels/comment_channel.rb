# Be sure to restart your server when you modify this file. Action Cable runs in a loop that does not support auto reloading.
class CommentChannel < ApplicationCable::Channel
  def follow(data)
    puts "post:#{data['post_id'].to_i}:comments"
    stop_all_streams
    stream_from "post:#{data['post_id'].to_i}:comments"
  end

  def unfollow
    stop_all_streams
  end
end
