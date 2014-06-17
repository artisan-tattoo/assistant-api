require "test_helper"

class NewArtistTest < Capybara::Rails::TestCase
  test "A link to new artists appears on the dashboard" do
    sign_in

    visit dashboard_path
 
    page.must_have_link "Create a new Artist"
  end
end
