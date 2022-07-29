class CommentsController < ApplicationController

    def create
        comment = Comment.create(commant_params)
        render json: comment
    end 

    private 
      
    def comment_params 
        params.permit(:text)
    end 
end
