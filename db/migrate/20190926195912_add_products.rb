class AddProducts < ActiveRecord::Migration[5.2]
  def change
  	Product.create  :title => 'Pizza1', :description => 'description pizza1', :price => 150, :size => 50, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => '/images/pizza1.jpg'

  	Product.create :title => 'Pizza2', :description => 'description pizza2', :price => 170, :size => 70, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => '/images/pizza2.jpg'

  	Product.create :title => 'Pizza3', :description => 'description pizza3', :price => 140, :size => 40, :is_spicy => false, :is_veg => true, :is_best_offer => false,
  		:path_to_image => '/images/pizza3.jpg'
  end
end
