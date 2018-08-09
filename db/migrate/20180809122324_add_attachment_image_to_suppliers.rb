class AddAttachmentImageToSuppliers < ActiveRecord::Migration[5.1]
  def self.up
    change_table :suppliers do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :suppliers, :image
  end
end
