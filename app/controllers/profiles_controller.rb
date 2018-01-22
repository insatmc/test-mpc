class ProfilesController < ApplicationController
  def index
    render json: {
      p_code: current_user.p_code,
      childs: current_user.childs,
      sponsor: current_user.sponsor
    }
  end

  def update_code
    sponsor = User.where(p_code: params[:p_code]).first
    sponsor_found = false
    if sponsor
      Sponsorship.create(user_id: sponsor.id, child_id: current_user.id)
      sponsor_found = true
    end
    render json: {
      p_code: current_user.p_code,
      childs: current_user.childs,
      sponsor: current_user.sponsor,
      sponsor_found: sponsor_found
    }
  end
end
