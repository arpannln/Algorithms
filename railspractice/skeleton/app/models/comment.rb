class Comment < ApplicationRecord
  validates :body, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'User'

  belongs_to :link,
  primary_key: :id,
  foreign_key: :link_id,
  class_name: 'Link'
  
end
