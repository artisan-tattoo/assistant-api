Rails.application.routes.draw do
  root "root#show"
  get "/dashboard", to: "dashboard#show"

  get  "/sign_in", to: "sessions#new"
  post "/sign_in", to: "sessions#create"
  delete "/sign_out", to: "sessions#destroy"

  resources :posts, only: [:index, :show]

  resources :artists, only: [:new, :create]
  resources :customers, only: [:new, :create]
end
