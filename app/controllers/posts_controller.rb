class PostsController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  rescue Errno::ENOENT
    render 'public/404', status: 404
  end
end
