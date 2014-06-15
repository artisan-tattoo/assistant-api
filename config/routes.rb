Rails.application.routes.draw do
  root "root#show"
  get "/dashboard", to: "dashboard#show"

  get  "/sign_in", to: "sessions#new"
  post "/sign_in", to: "sessions#create"

  resources :posts, only: [:index, :show]
end
