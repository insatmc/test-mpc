Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  devise_scope :user do
    post 'api/auth' => "registrations#create"
  end

  ActiveAdmin.routes(self)
  get 'profiles/index'
  post 'profiles/update_code'

  default_url_options :host => "example.com"
  get 'app/index'
  root "app#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: "app#index", via: [:get]

end
