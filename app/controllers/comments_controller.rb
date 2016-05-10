class CommentsController < ApplicationController
  before_action :set_comment, :set_post, only: [:show, :edit, :update, :destroy]

  # GET /comments
  # GET /comments.json
  def index
    @comments = Comment.all.order('id DESC')
  end

  # GET /comments/1
  # GET /comments/1.json
  def show
  end

  # POST /comments.json
  def create
    @comment = Comment.new(comment_params)
    respond_to do |format|
      if @comment.save
        format.json { render :show, status: :created }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /comments/1.json
  def update
    respond_to do |format|
      if @comment.update(comment_params)
        format.json { render :show, status: :ok }
      else
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comments/1.json
  def destroy
    @comment.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    def set_post
      @post = Post.find(params[:post_id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:post_id, :body)
    end
end
