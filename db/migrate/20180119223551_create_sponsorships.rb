class CreateSponsorships < ActiveRecord::Migration[5.1]
  def change
    create_table :sponsorships do |t|
      t.references :user, foreign_key: true
      t.integer :child_id

      t.timestamps
    end
  end
end
