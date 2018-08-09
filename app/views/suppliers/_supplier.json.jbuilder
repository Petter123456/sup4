json.extract! supplier, :id, :company, :company_number, :company_representative, :second_representative, :email, :telephone, :city, :recruitment_percentage, :description, :image_file_name, :image_content_type, :image_file_size, :created_at, :updated_at
json.url supplier_url(supplier, format: :json)
