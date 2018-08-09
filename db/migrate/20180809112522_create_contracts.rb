class CreateContracts < ActiveRecord::Migration[5.1]
  def change
    create_table :contracts do |t|
      t.string :position
      t.integer :user_id
      t.integer :supplier_id
      t.integer :order_spec_id
      t.string :product_area
      t.string :start_date
      t.string :end_date
      t.string :city
      t.string :percentage
      t.string :experiance
      t.string :salary
      t.string :supplier
      t.string :supplier_price
      t.string :supplier_name
      t.string :type_of_service

      t.timestamps
    end
  end
end
