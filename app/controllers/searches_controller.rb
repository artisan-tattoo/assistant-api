class SearchesController < ApplicationController
  def show
    # Postgres uses ILIKE, sqlite uses LIKE. :cry:
    like = Rails.env.production? ? "ILIKE" : "LIKE"

    @results = %w[name phone email credit want notes location].collect do |col|
      Customer.where(["#{col} #{like} ?","%#{params[:q]}%"])
              .where(shop: current_shop)
              .all
    end.inject([], &:|)
  end
end
