hh = {}

loop do 
    
	puts "Enter  pruduct id:"
	id = gets.chomp

	puts "Enter how much items you want to order: "
	n = gets.chomp.to_i
	
	x = hh[id].to_i
	x += n 
		         
	hh[id] = x

	puts hh.inspect
	puts '============================='
	                          
end