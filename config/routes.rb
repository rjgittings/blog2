  Rails.application.routes.draw do

  resources :comments
  resources :posts, only: [:index, :create, :destroy]
  post "/signup", to: "users#create"
  delete '/posts/:id', to: "posts#destroy"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


end

