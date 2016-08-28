class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :amount
      t.text :comment
      t.integer :user_id
      t.integer :project_id

      t.timestamps null: false
    end
  end
end
