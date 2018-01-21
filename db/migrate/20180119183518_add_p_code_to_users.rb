class AddPCodeToUsers < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :p_code, :string
  end
end
