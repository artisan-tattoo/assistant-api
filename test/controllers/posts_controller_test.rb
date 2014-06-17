class PostsControllerTest < ActionController::TestCase
  test "should include an RSS <link>" do
    get :index
    assert_select "link[type='application/rss+xml']"
  end
end
