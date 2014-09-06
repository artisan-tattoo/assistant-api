class SearchesController < ApplicationController
  def show
    %i[name phone email credit want notes location].each do |col|
      @collected_arel = @collected_arel.nil? ?
                          matches_column(col) :
                          @collected_arel.or(matches_column(col))
    end

    @results = Customer.where(shop: current_shop)
                       .where(@collected_arel)
  end

  private

  def customer_table
    @customer_table ||= Customer.arel_table
  end

  def matches_column(col)
    customer_table[col].matches("%#{params[:q]}%")
  end
end
