class TopicResource < JSONAPI::Resource
attributes :name

has_many :flashcards
end
