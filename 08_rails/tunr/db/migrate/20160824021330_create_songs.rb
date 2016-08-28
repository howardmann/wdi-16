class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.text :name
      # REFERENCE MY FOREIGN KEYS
      t.integer :artist_id
      t.integer :album_id

      t.timestamps null: false
    end
  end
end
