class ProfilesController < ApplicationController
  def index
    render json: {
      p_code: current_user.p_code,
      childs: current_user.childs,
      sponsor: current_user.sponsor
    }
  end
end
