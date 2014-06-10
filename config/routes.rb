Rails.application.routes.draw do
  root "root#show"

  resources :posts, only: [:index, :show]
end
