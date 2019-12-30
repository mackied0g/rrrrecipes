class CreateRecipes < ActiveRecord::Migration[5.2]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :ingredients, null: false
      t.text :instruction, null: false
      t.string :image, default: 'https://motherhoodthroughmyeyes.com/wp-content/uploads/2019/11/Green-Eggs-and-Ham-on-Netflix-MTME-1.pnghttps://www.thewrap.com/wp-content/uploads/2019/11/Green-Eggs-Ham-Trailer.jpg'
      t.timestamps
    end
  end
end