Contract.create!([
  {position: "systemutvecklare", user_id: nil, supplier_id: 1, order_spec_id: nil, product_area: nil, start_date: "2018-08-31", end_date: "2018-11-16", city: "göteborg", percentage: "100 %", experiance: nil, salary: "40000", supplier: nil, supplier_price: "Hyr per timme:\n                 kr\n              ", supplier_name: "Academic Work ", type_of_service: "Rent"}
])
Price.create!([
  {it: "3.0", finance: "2.5", call_center: "2.0", logistics: "2.0", marketing: "2.1", technology: "3.0", supplier_id: 1},
  {it: "3.0", finance: "2.5", call_center: "2.0", logistics: "2.0", marketing: "2.1", technology: "3.0", supplier_id: 2},
  {it: "3.0", finance: "2.5", call_center: "2.0", logistics: "2.0", marketing: "2.1", technology: "3.0", supplier_id: 3},
  {it: "3.0", finance: "2.5", call_center: "2.0", logistics: "2.0", marketing: "2.1", technology: "3.0", supplier_id: 4},
  {it: "3.0", finance: "2.5", call_center: "2.0", logistics: "2.0", marketing: "2.1", technology: "3.0", supplier_id: 5},
  {it: "3.0", finance: "2.5", call_center: "2.0", logistics: "2.0", marketing: "2.1", technology: "3.0", supplier_id: 6}
])
Supplier.create!([
  {company: "Academic Work ", company_number: "78787", company_representative: "hhh", second_representative: "jhjhhj", email: "petter.fagerlund@gmail.com", telephone: "787878", city: "göteborg", recruitment_percentage: "25", description: "Vi är bäst på unga talanger med upp till 5 års erfarenhet ", image_file_name: "iBSlOL92.png", image_content_type: "image/png", image_file_size: 42497, image_updated_at: "2018-08-10 13:23:07"},
  {company: "Manpower", company_number: "7788778", company_representative: "jjjhhk", second_representative: "kjhkjhkjhk", email: "petter.fagerlund@gmail.com", telephone: "782178178", city: "göteborg", recruitment_percentage: "23", description: "Vi är världsledande inom rekrytering och bemanning ", image_file_name: "manpower.jpg", image_content_type: "image/jpeg", image_file_size: 11222, image_updated_at: "2018-08-10 14:02:38"},
  {company: "Friday Tech Recruitment", company_number: "788778", company_representative: "bhjhjb", second_representative: "hjbbjbbj", email: "petter.fagerlund@gmail.com", telephone: "77878", city: "göteborg", recruitment_percentage: "27", description: "Vi är karriärpartnern för dig som vill hitta rätt arbetsplats inom IT och teknik", image_file_name: "friday.jpeg", image_content_type: "image/jpeg", image_file_size: 73899, image_updated_at: "2018-08-10 14:03:10"},
  {company: "Effektiv Bemanning", company_number: "78789", company_representative: "bhbjbhjhb", second_representative: "bhjbjhbhj", email: "petter.fagerlund@gmail.com", telephone: "87788398", city: "göteborg", recruitment_percentage: "22", description: "För vinnare i arbetslivet", image_file_name: "effektiv.png", image_content_type: "image/png", image_file_size: 23344, image_updated_at: "2018-08-10 14:03:39"},
  {company: "Student Consulting", company_number: "7832783278", company_representative: "jsajiub", second_representative: "hhiuhhi", email: "petter.fagerlund@gmail.com", telephone: "7887378", city: "göteborg", recruitment_percentage: "21", description: "Hos oss möter medarbetare sin framtida arbetsgivare och arbetsgivare sina framtida medarbetare.", image_file_name: "student.consulting.jpg", image_content_type: "image/jpeg", image_file_size: 15039, image_updated_at: "2018-08-10 14:04:14"},
  {company: "Software skills", company_number: "7787878", company_representative: "jskdhjsbf", second_representative: "hbhjbjhjh", email: "petter.fagerlund@gmail.com", telephone: "783278378", city: "göteborg", recruitment_percentage: "26", description: "Vi matchar de bästa IT talangerna med utmanande jobb!", image_file_name: "softwareskills.png", image_content_type: "image/png", image_file_size: 3364, image_updated_at: "2018-08-10 14:04:49"}
])
User.create!([
  {name: "petter", email: "petter.fagerlund@gmail.com", password_digest: "$2a$10$axlmTG1YA4tHYeH.xmsoVOKRofxsMp3Ccu7zZQRBj48dWVYixnQqa", datetime: nil, company: nil, company_number: nil, telephone_number: nil, auth_token_string: nil, password_reset_token: nil, password_reset_sent_at: nil}
])
