require "test_helper"

class SignOutTest < Capybara::Rails::TestCase
  test "When signed in, the home page has a sign out link" do
    sign_in

    visit root_path
 
    page.must_have_link "Sign out"
  end

  test "When signed in, the dashboard has a sign out link" do
    sign_in

    page.must_have_link "Sign out"
  end

  test "Signing out properly signs you out" do
    sign_in

    page.click_link "Sign out"

    page.must_have_link "Sign in"
    page.wont_have_link "Sign out"

    page.current_path.must_equal root_path
  end
end
