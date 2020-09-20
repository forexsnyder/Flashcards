# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

aws = Topic.create!(name: "AWS Solutions Associate")
cissp = Topic.create!(name: "CISSP")
security = Topic.create!(name: "Security+")


flashcard1 = Flashcard.create!(front: "What is AWS", back: "A place to earn money.", topic_id: 1)
flashcard2 =Flashcard.create!(front: "What is Azure", back: "A place to earn money.", topic_id: 1)
Flashcard.create!(front: "What is IBM", back: "A place to earn money.", topic_id: 1)
Flashcard.create!(front: "What is Ducks", back: "A place to earn money.", topic_id: 2)
Flashcard.create!(front: "What is Bike", back: "A place to earn money.", topic_id: 2)
Flashcard.create!(front: "What is cat", back: "A place to earn money.", topic_id: 2)
Flashcard.create!(front: "What is AWS", back: "A place to earn money.", topic_id: 3)

Comment.create!(comment: "Why is Jeff Bezos so rich", flashcard_id: 1)
