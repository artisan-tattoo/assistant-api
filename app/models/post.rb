class Post
  extend ActiveModel::Naming

  attr_accessor :title, :body, :slug, :created_at

  def self.find(slug)
    path = File.join(Rails.root, "lib/posts/#{slug}.md")
    contents = File.open(path, "r").read

    rendered = Metadown.render(contents)

    new.tap do |post|
      post.title = rendered.metadata["title"]
      post.slug = rendered.metadata["slug"]
      post.body = rendered.output.html_safe
      post.created_at = File.ctime(path)
    end
  end

  def self.all
    path = File.join(Rails.root, "lib/posts/")

    entries = Dir.entries(path)
    entries.delete(".")
    entries.delete("..")

    entries.collect do |filename|
      find(filename[0..-4]) # chop off ".md"
    end
  end

  def to_param
    slug
  end
end
