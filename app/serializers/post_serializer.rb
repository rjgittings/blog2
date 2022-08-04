class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body, :user_id, :img
  belongs_to :user
end
