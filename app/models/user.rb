class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, 
         :recoverable, :rememberable, :trackable, :validatable
  # Include default devise modules.
  devise :database_authenticatable, 
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_many :sponsorships
  has_many :childs, through: :sponsorships

  has_one :sponsorship, foreign_key: "child_id"
  has_one :sponsor, through: :sponsorship, :class_name => 'User'
end
