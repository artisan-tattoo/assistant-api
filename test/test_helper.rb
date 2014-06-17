ENV["RAILS_ENV"] = "test"
require File.expand_path("../../config/environment", __FILE__)
require "rails/test_help"
require "minitest/rails"

require "minitest/rails/capybara"

require "minitest/pride"

class ActiveSupport::TestCase
    ActiveRecord::Migration.check_pending!

    # Setup all fixtures in test/fixtures/*.(yml|csv) for all tests in alphabetical order.
  #
  # Note: You'll currently still have to declare fixtures explicitly in integration tests
  # -- they do not yet inherit this setting
  fixtures :all

  def sign_in
    shop = Shop.create(
      name: "Artisan",
      email: "artisan@example.com",
      password: "password",
      password_confirmation: "password",
    )

    visit sign_in_path

    page.must_have_content "Sign in"
    page.must_have_button "Sign in"

    within("#session") do
      fill_in "Email", :with => "artisan@example.com"
      fill_in "Password", :with => "password"
    end

    click_button "Sign in"

    shop # this lets us get a reference to the shop that we're signed in as
  end

end
