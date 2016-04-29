class CreateVotes < ActiveRecord::Migration[5.0]
  def change
    create_table :votes do |t|
      t.belongs_to :votable, polymorphic: true
      t.timestamps
    end
    add_index :votes, [:votable_id, :votable_type]
  end
end
