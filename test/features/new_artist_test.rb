require "test_helper"

class NewArtistTest < Capybara::Rails::TestCase
  test "A link to new artists appears on the dashboard" do
    sign_in

    visit dashboard_path
 
    page.must_have_link "Create a new Artist"
  end

  test "Successfully create a new artist" do
    sign_in

    visit new_artist_path
 
    within("#new_artist") do
      fill_in "Name", :with => "Jason Angst"
    end

    assert_difference 'Artist.count', 1 do
      click_button "Create Artist"
    end

    page.must_have_content "New Artist created!"

    page.current_path.must_equal dashboard_path
  end
end
