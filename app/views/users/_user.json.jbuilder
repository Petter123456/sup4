json.extract! user, :id, :name, :email, :password_digest, :datetime, :company, :company_number, :telephone_number, :password_reset_token, :created_at, :updated_at
json.url user_url(user, format: :json)
