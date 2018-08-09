class CreatePrices < ActiveRecord::Migration[5.1]
  def change
    create_table :prices do |t|
      t.string :it
      t.string :finance
      t.string :call_center
      t.string :logistics
      t.string :marketing
      t.string :technology

      t.timestamps
    end
  end
end
