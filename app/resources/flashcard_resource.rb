class FlashcardResource < JSONAPI::Resource
    attributes :front, :back 

    
  belongs_to :topic
end
