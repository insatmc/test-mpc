class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  #skip_before_action :verify_authenticity_token, :only => :create
  #protect_from_forgery with: :null_session
end
