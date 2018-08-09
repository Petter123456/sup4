class RemoveImageFileNameImageContentTypeImageFileSizeFromSupplier < ActiveRecord::Migration[5.1]
  def change
    remove_column :suppliers, :image_file_name
    remove_column :suppliers, :image_content_type
    remove_column :suppliers, :image_file_size

  end
end
