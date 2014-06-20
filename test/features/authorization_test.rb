require 'test_helper'

class AuthorizationTest < Capybara::Rails::TestCase
  test "A shop can only edit its own customers" do
    shop = sign_in
    shop2 = Shop.create(
      name: "Innocent Shop",
      email: "innocent@example.com",
      password: "password",
      password_confirmation: "password"
    )
    customer = shop2.customers.create

    visit edit_customer_path(customer)

    page.must_have_content "Sorry, you can't do that."

    page.current_path.must_equal dashboard_path
  end

  test "A shop can only see its own customers" do
    shop = sign_in
    shop2 = Shop.create(
      name: "Innocent Shop",
      email: "innocent@example.com",
      password: "password",
      password_confirmation: "password"
    )
    customer = shop2.customers.create

    visit customer_path(customer)

    page.must_have_content "Sorry, you can't do that."

    page.current_path.must_equal dashboard_path
  end
end 
