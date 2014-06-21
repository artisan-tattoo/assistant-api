require "test_helper"

class SearchTest < Capybara::Rails::TestCase
  test "Search customers from the dashboard" do
    shop = sign_in

    create_search_customers(shop)

    visit dashboard_path
 
    within("#search") do
      fill_in "q", :with => "Jon"
    end

    click_button "Search Customers"

    page.current_path.must_equal "/search"

    page.must_have_link "Jon Doe"
    page.wont_have_link "Jane Doe"
  end

  def create_search_customers(shop)
    customer = shop.customers.create(
      name: "Jane Doe",
      phone: "555 555 5555",
      email: "jane@example.com",
      date_on_waiting_list: DateTime.civil(2014, 1, 10, 0, 0, 0, 0),
      status: 2, # waiting
      local: true,
      location: "Pittsburgh, PA",
      credit: "$10",
      want: "Super awesome dragon backpiece.",
      notes: "",
      shop: shop
    )

    customer = shop.customers.create(
      name: "Jon Doe",
      phone: "555 555 5555",
      email: "jane@example.com",
      date_on_waiting_list: DateTime.civil(2014, 1, 10, 0, 0, 0, 0),
      status: 2, # waiting
      local: true,
      location: "Pittsburgh, PA",
      credit: "$10",
      want: "Super awesome dragon backpiece.",
      notes: "",
      shop: shop
    )
  end
end
