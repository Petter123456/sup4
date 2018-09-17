class ConfirmationMailer < ApplicationMailer
  default from: "postmaster@digirek.se"

    def confirmation_email(user) #user from controller
      @user = user
      @contract = Contract.last

      mg_client = Mailgun::Client.new ENV['api_key']
          message_params = {:from    => ENV['gmail_username'],
                            :to      => @user.email,
                            :subject => 'Sample Mail using Mailgun API',
                            :text    => 'This mail is sent using Mailgun API via mailgun-ruby'}
          mg_client.send_message ENV['domain'], message_params


      mail(to: @user.email, subject: 'Order Confirmation')
    end

    def confirmation_email_supplier(supplier, user, contract) #user from controller
      @user = user
      @supplier = supplier
      @contract = contract

      mg_client = Mailgun::Client.new ENV['api_key']
          message_params = {:from    => ENV['gmail_username'],
                            :to      => @user.email,
                            :subject => 'Sample Mail using Mailgun API',
                            :text    => 'This mail is sent using Mailgun API via mailgun-ruby'}
          mg_client.send_message ENV['domain'], message_params


      mail(to: @supplier.email, subject: 'New Order Incoming!')
    end

    def admin_order_confirmation (admin, supplier, user, contract)
      @user = user
      @supplier = supplier
      @admin = admin
      @contract = contract

      mg_client = Mailgun::Client.new ENV['api_key']
          message_params = {:from    => ENV['gmail_username'],
                            :to      => @user.email,
                            :subject => 'Sample Mail using Mailgun API',
                            :text    => 'This mail is sent using Mailgun API via mailgun-ruby'}
          mg_client.send_message ENV['domain'], message_params


      mail(to: @admin, subject: 'NY Beställning!! =)')
    end
    #
    # def admin_order_confirmation (admin)
    #   @admin = admin
    #   mail(to: 'petter.fagerlund@gmail.com', subject: 'Sample Email')
    # end

end
