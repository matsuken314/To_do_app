Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  # devise_scope :user do
  #   get '/users/sign_out' => 'devise/sessions#destroy'
  # end
  root 'top#index'
  resources :list, only: [:new, :create, :edit, :update, :destroy] do
    resources :card, only: %i(new create show edit update)
  end
end
