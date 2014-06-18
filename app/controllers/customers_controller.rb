class CustomersController < ApplicationController
  def new
    @customer = Customer.new
  end

  def create
    @customer = current_shop.customers.create(customer_params)

    flash[:notice] = "New Customer created!"

    redirect_to dashboard_path
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
