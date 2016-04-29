20.times do |i|
  Post.create({
    title: "Lorem Ipsum title - #{i}",
    body: 'Lorem ipsum body'
  })
end
