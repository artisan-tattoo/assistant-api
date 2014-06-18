require "test_helper"

class NewCustomerTest < Capybara::Rails::TestCase
  test "A link to new customers appears on the dashboard" do
    sign_in

    visit dashboard_path
 
    page.must_have_link "Create a new Customer"
  end
end
