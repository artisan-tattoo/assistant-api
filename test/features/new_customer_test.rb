require "test_helper"

class NewCustomerTest < Capybara::Rails::TestCase
  test "A link to new customers appears on the dashboard" do
    sign_in

    visit dashboard_path
 
    page.must_have_link "Create a new Customer"
  end

  test "Successfully create a new customer" do
    shop = sign_in

    visit new_customer_path
 
    within("#new_customer") do
      fill_in "Name", :with => "Steve Klabnik"
      fill_in "Phone", :with => "867 5309"
      fill_in "Email", :with => "steve@example.com"
 
      select "2014", :from => "customer[date_on_waiting_list(1i)]"
      select "January",   :from => "customer[date_on_waiting_list(2i)]"
      select "1",   :from => "customer[date_on_waiting_list(3i)]"

      select "Waiting", :from => "Status"
      check "Local" # I'm not local, but I want to pick all options
      fill_in "Location", :with => "NYC"
      fill_in "Credit", :with => "None"
      fill_in "Want", :with => "Sweet sleeve"
      fill_in "Notes", :with => "Friend of the shop"
    end

    assert_difference 'Customer.count', 1 do
      click_button "Create Customer"
    end

    page.must_have_content "New Customer created!"

    page.current_path.must_equal dashboard_path

    # ensure that we associate the customer with the shop. If we don't,
    # their name wouldn't appear on this page.
    page.must_have_content "Steve Klabnik"
  end
end
