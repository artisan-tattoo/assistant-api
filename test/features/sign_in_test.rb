require "test_helper"

class SignInTest < Capybara::Rails::TestCase
  let(:shop) { Shop.where(name: "Artisan").create }

  test "The home page has a sign in link" do
    visit root_path
 
    page.must_have_link "Sign in"
  end
end
