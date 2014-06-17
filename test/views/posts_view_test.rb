class PostsViewTest < ActionView::TestCase
  test "should include an RSS <link>" do
    @posts = []
    render template: "posts/index.html.erb",
           layout: 'layouts/application.html.erb',
           locals: { current_shop: nil }
    assert_select "link[type='application/rss+xml']"
  end
end
