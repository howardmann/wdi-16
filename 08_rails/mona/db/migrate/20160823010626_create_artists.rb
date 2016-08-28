# 1) terminal rails g migration create_artists
# 2) fill out table columns below t.text :name
# 3) rake db:migrate
# 4) check if works run terminal: 'rails db' and '.schema'

class CreateArtists < ActiveRecord::Migration
  def change
    create_table :artists do |t|
      t.text :name
      t.text :nationality
      t.date :dob
      t.text :period
      t.text :image

      t.timestamps #created_at and updated_at
    end
  end
end
