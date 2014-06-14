Rails.application.routes.draw do
  root "root#show"

  resources :posts, only: [:index, :show]

  get "/sign_in", to: 'sessions#new'
end
