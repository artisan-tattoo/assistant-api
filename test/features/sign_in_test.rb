require "test_helper"

class SignInTest < Capybara::Rails::TestCase
  let(:shop) do
    Shop.create(
      name: "Artisan",
      email: "artisan@example.com",
      password: "password",
      password_confirmation: "password",
    )
  end

  test "The home page has a sign in link" do
    visit root_path
 
    page.must_have_link "Sign in"
  end

  test "An existing shop can sign in" do
    shop # make sure our shop exists

    visit sign_in_path

    page.must_have_content "Sign in"
    page.must_have_button "Sign in"

    within("#session") do
      fill_in "Email", :with => "artisan@example.com"
      fill_in "Password", :with => "password"
    end

    click_button "Sign in"

    page.must_have_content "You have signed in successfully!"
    page.wont_have_content "Sign in"
  end

  test "A wrong password leads to failure" do
    shop # make sure our shop exists

    visit sign_in_path

    within("#session") do
      fill_in "Email", :with => "artisan@example.com"
      fill_in "Password", :with => "hunter2"
    end

    click_button "Sign in"

    page.must_have_content "Sorry, wrong email and/or password. Please try again."
    page.wont_have_content "You have signed in successfully!"

    page.current_path.must_equal "/sign_in"
  end

  test "A non-existant email leads to failure" do
    shop # make sure our shop exists

    visit sign_in_path

    within("#session") do
      fill_in "Email", :with => "nobody@example.com"
      fill_in "Password", :with => "password"
    end

    click_button "Sign in"

    page.must_have_content "Sorry, wrong email and/or password. Please try again."
    page.wont_have_content "You have signed in successfully!"

    page.current_path.must_equal "/sign_in"
  end
end
