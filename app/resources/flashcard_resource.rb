class FlashcardResource < JSONAPI::Resource
    attributes :front, :back 

    has_many :comments
    has_one :topic
end
