class CreateGenresSongs < ActiveRecord::Migration
  def change
    create_table :genres_songs, :id => false do |t|
      t.integer :genre_id
      t.integer :song_id
    end
  end
end

# A sneaky join table important to remember
  # 1. NEEDS TO BE ALPHABETICAL ORDER AND Plural
  # 2. Only has foregin keys (genre_id and song_id)
  # 3. It doesn't need an ID as we will never search this database, it is only used by ActiveRecord behind the scenes
