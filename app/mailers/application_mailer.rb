class ApplicationMailer < ActionMailer::Base
  require 'mailgun'

  default from: 'me@digirek.se'
  layout 'mailer'
end
