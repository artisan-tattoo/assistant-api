class CustomersController < ApplicationController

  def show
    @customer = Customer.find(params[:id])
    render json: @customer, content_type: "application/json"
  rescue Errno::ENOENT
    raise ActionController::RoutingError.new(
      "Sorry, no customer exists with slug #{params[:id]}"
    )
  end

  def create
    @customer = current_shop.customers.create(customer_params)
  end

  def update
    @customer = Customer.find(params[:id])
    @customer.update(customer_params)
  end

  private

  def customer_params
    params.require(:customer).permit(
      :name,
      :phone,
      :email,
      :date_on_waiting_list,
      :status,
      :local,
      :location,
      :credit,
      :want,
      :notes,
    )
  end
end
