class PostsController < ApplicationController

    def index
        render json: Post.all
    end

    def create
        post = Post.create(post_params)
        render json: post
    end 

    def destroy
        post = Post.find_by(id: params[:id])
        post.destroy
        head :no_content
    end 

    private 
    
    def post_params 
        params.permit(:title, :body, :user_id)
    end 

end

