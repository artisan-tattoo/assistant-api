class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  rescue Errno::ENOENT
    raise ActionController::RoutingError.new("Sorry, no post exists with slug #{params[:id]}")
  end
end
