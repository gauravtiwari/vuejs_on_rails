Rails.application.routes.draw do
  root to: 'posts#index'
  resources :posts do
    resources :votes
    resources :comments
  end
  mount ActionCable.server => '/cable'
end
