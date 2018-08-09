class RemovePasswordResetToken < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :password_reset_token

  end
end
