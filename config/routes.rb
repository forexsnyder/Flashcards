Rails.application.routes.draw do
  resources :highscores
  resources :comments
  resources :flashcards
  resources :topics
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
