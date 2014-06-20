class CustomersController < ApplicationController
  def new
    @customer = Customer.new
  end

  def create
    @customer = current_shop.customers.create(customer_params)

    flash[:notice] = "New Customer created!"

    redirect_to dashboard_path
  end

  def edit
    @customer = Customer.find(params[:id])
    if @customer.shop_id != current_shop.id
      flash[:error] = "Sorry, you can't do that."

      redirect_to dashboard_path
    end
  end

  def update
    @customer = Customer.find(params[:id])

    if @customer.shop_id != current_shop.id
      flash[:error] = "Sorry, you can't do that."
    else
      @customer.update(customer_params)

      flash[:notice] = "Customer updated!"
    end

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
