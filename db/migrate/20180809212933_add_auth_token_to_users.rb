class AddAuthTokenToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :auth_token_string, :string
  end
end
