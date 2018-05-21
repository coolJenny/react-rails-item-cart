# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

class Seed
	attr_reader :seed
	def initialize
		@seed
	end

	def run
		generate_data
	end

	def generate_data
		10.times do
			item = Item.new
			item.name = "Item"
			item.description = "I am a description."
			item.save!
			puts "Generated item  # #{item.id}"
		end
	end
end

seed = Seed.new
seed.run
