class Post
  attr_accessor :title, :body, :created_at

  def self.find(slug)
    path = File.join(Rails.root, "lib/posts/#{slug}.md")
    contents = File.open(path, "r").read

    rendered = Metadown.render(contents)

    new.tap do |post|
      post.title = rendered.metadata["title"]
      post.body = rendered.output.html_safe
      post.created_at = File.ctime(path)
    end
  end
end
