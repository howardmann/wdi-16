Rails.application.routes.draw do

  get '/login' => 'session#new'
  post '/login' => 'session#create'
  delete '/logout' => 'session#destroy'

  root "pages#home"
  get '/home' => "pages#home"

  post '/projects/:project_id/pledges' => 'pledges#create', as: 'project_pledges'
  get '/projects/:project_id/pledges/new' => 'pledges#new', as: 'new_project_pledge'

  #
  # get '/users/:user_id/pledges/:id/edit' => 'pledges#edit', as: 'edit_user_pledge'
  # get '/users/:user_id/pledges/:id' => 'pledges#show', as: 'user_pledge'
  # patch '/users/:user_id/pledges/:id' => 'pledges#update', as: 'pledge'
  # put '/users/:user_id/pledges/:id' => 'pledges#update'


  get '/projects' => 'projects#index'
  post '/projects' => 'projects#create'
  get '/projects/new' => 'projects#new', as: 'new_project'
  get '/projects/:id/edit' => 'projects#edit', as: 'edit_project'
  get '/projects/:id' => 'projects#show', as: 'project'
  patch '/projects/:id' => 'projects#update'
  put '/projects/:id' => 'projects#update'


  delete '/projects/:id' => 'projects#destroy'



  resources :users do
    resources :pledges, except: [:create, :new]
  end
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
