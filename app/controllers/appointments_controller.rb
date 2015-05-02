class AppointmentsController < ApplicationController
  def create
    @appointment = current_shop.appointments.create(appointment_params)
  end

  def show
    @appointment = Appointment.find(params[:id])
    render json: @appointment, content_type: "application/json"
  rescue Errno::ENOENT
    raise ActionController::RoutingError.new(
      "Sorry, no appointment exists with slug #{params[:id]}"
    )
  end

  def update
    @appointment = Appointment.find(params[:id])
    @appointment = current_shop.appointments.create(appointment_params)
  end

  private

  def appointment_params
    params.require(:appointment).permit(
      :datetime,
      :description,
      :password,
      :password_confirmation,
    )
  end
end
