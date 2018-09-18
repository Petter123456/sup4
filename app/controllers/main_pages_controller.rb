class MainPagesController < ApplicationController
  before_action :set_song, only: [:show, :edit, :update, :destroy]

  def index
  end

  def page_1
    # Product Areas
    @product_areas = ["IT", "Finans/Ekonomi", "Marknadsföring", "Kundtjänst", "Teknologi/Ingenjörer", "Lager/Logistik"]
    # Position Percentages
    @position_percentage = ["10 %",'20 %','30 %','40 %', '50 %', '60 %', '70 %', '80 %', '90 %', '100 %']
    # Experiance
    @level_of_experiance = ["Student","Nyexad", "1 år", "2 år", "3 år", "4 år", "5 år", "5 + år" ]
    # Min Month Salary
    @monthly_salary = []
    i = 20000
    while i < 150000 do
      @monthly_salary << i
      i += 2000
    end
    #Instance variables to query database
    @supplier = Supplier.all
    @supplier_first = @supplier.first
    #Supplier city inpput match database
    if params[:city].present?
      @suppliers = Supplier.where('city like ?',"%#{params[:city]}%")
    end

    #Product area gets different prices
    @assitance = params[:assitance].downcase rescue nil



    @salary_divided_by_hours = params[:salary].to_f / 160
    @salary_multiplied_by_months = params[:salary].to_f * 12.ceil


  end

  def om_oss

  end

  def confirm_order_and_email

    # creating contracts generated through strong params which is populated from tasks.js deepending on user selection
    Contract.create(main_params)  
    # Email functions with corresponding user, supplier and admin - same email is sendt to all.
    @admin = "petter.fagerlund@gmail.com"
    @user = User.find(session[:user_id])
    @supplier = Supplier.find(params[:contracts][:supplier_id])
    @contract = Contract.last

    ConfirmationMailer.confirmation_email(@user).deliver_now
    ConfirmationMailer.admin_order_confirmation(@admin, @supplier, @user, @contract).deliver_now
    ConfirmationMailer.confirmation_email_supplier(@supplier, @user, @contract).deliver_now

  end

  def create
  end

  def new
  end

  def show
  end

  def delete
  end

  def kontakt
  end

  private

    def main_params
      params.require(:contracts).permit(
        :city,
        :name,
        :email,
        :position,
        :date,
        :product_area,
        :start_date,
        :end_date,
        :percentage,
        :experience,
        :salary,
        :supplier_id,
        :supplier_price,
        :supplier_name,
        :type_of_service,
        :telephone_number,
        :image
      )
    end

end
