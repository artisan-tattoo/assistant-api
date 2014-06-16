class PostsControllerTest < ActionController::TestCase
  test "should include an RSS <link>" do
    get :index
    doc = Nokogiri::HTML(@response.body)
    assert doc.xpath("//link[@type='application/rss+xml']").count > 0,
          "Posts index page should include auto-detectable RSS <link>"
  end
end
