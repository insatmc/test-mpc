class Sponsorship < ApplicationRecord
  belongs_to :sponsor, :class_name => "User", :foreign_key => "user_id"
  belongs_to :child, :class_name => 'User'
end
