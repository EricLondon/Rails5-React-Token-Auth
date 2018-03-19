# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

(1..2).each do |i|
  Page.create!(title: "Public Page #{i}", content: "Public content #{i}", allow_unauth: true) rescue nil
  Page.create!(title: "Private Page #{i}", content: "Super secret content #{i}", allow_unauth: false) rescue nil
end

User.create!(email: 'eric.london@example.com', password: 'password')
