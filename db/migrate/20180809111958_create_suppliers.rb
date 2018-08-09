class CreateSuppliers < ActiveRecord::Migration[5.1]
  def change
    create_table :suppliers do |t|
      t.string :company
      t.string :company_number
      t.string :company_representative
      t.string :second_representative
      t.string :email
      t.string :telephone
      t.string :city
      t.string :recruitment_percentage
      t.string :description
      t.string :image_file_name
      t.integer :image_content_type
      t.datetime :image_file_size

      t.timestamps
    end
  end
end
