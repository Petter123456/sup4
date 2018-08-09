class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.string :datetime
      t.string :company
      t.string :company_number
      t.string :telephone_number
      t.datetime :password_reset_token

      t.timestamps
    end
  end
end
