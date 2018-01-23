require 'securerandom'
class RegistrationsController < DeviseTokenAuth::RegistrationsController
  def new
    super
  end

  def create
    super
    random_code = SecureRandom.base64[0..5]
    current_user.update(p_code: random_code)
    current_user.update(name: params[:name])
    sponsor = User.where(p_code: params[:p_code]).first
    if sponsor
      Sponsorship.create(user_id: sponsor.id, child_id: current_user.id)
    end
  end

  def update
    super
  end
end
