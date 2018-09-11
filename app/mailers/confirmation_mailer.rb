class ConfirmationMailer < ApplicationMailer
  default from: "me@digirek.se"
  RestClient.post "https://api:f4039bef2651e41269d28d81e65b9b26-c1fe131e-118b2137"\"@api.mailgun.net/v3/digirek.se/messages"
  
    def confirmation_email(user) #user from controller
      @user = user
      @contract = Contract.last
      mail(to: @user.email, subject: 'Order Confirmation')
    end

    def confirmation_email_supplier(supplier, user, contract) #user from controller
      @user = user
      @supplier = supplier
      @contract = contract
      mail(to: @supplier.email, subject: 'New Order Incoming!')
    end

    def admin_order_confirmation (admin, supplier, user, contract)
      @user = user
      @supplier = supplier
      @admin = admin
      @contract = contract
      mail(to: @admin, subject: 'NY Beställning!! =)')
    end
    #
    # def admin_order_confirmation (admin)
    #   @admin = admin
    #   mail(to: 'petter.fagerlund@gmail.com', subject: 'Sample Email')
    # end

end
