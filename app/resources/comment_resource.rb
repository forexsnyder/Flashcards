class CommentResource < JSONAPI::Resource
    attributes :comment 

    has_one :flashcard
end
