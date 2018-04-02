class User < ApplicationRecord
  validates :password_digest, :session_token, :username, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  before_validation :ensure_session_token

  attr_reader :password

  has_many :links,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Link'

  has_many :comments,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: 'Comment'

  def ensure_session_token
    self.password_digest = SecureRandom.
  end

end
