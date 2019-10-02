class AddProducts < ActiveRecord::Migration[6.0]
  def change
  	 Product.create 
  	 	:title => 'pizza1', 
  	 	:description => 'This is pizza1', 
  	 	:price => 150,
  	 	:size => 30,
  	 	:is_spicy => false,
  	 	:is_veg => false,
  	 	:is_best_offer => false,
  	 	:path_to_image => '/images/pizza1.jpg'

  end
end
