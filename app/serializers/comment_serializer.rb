class CommentSerializer < ActiveModel::Serializer
  attributes :text
  has_one :user
  has_one :post
end
