json.array!(@votes) do |vote|
  json.extract! vote, :id, :votable_id, :votable_id, :votable_id, :votable_id, :votable_id, :votable_id, :votable_id, :votable_id, :votable_id
  json.url vote_url(vote, format: :json)
end
