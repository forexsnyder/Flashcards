Rails.application.routes.draw do
  resources :highscores
  jsonapi_resources :comments
  jsonapi_resources :flashcards
  jsonapi_resources :topics
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
