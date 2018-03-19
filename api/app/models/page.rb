class Page < ApplicationRecord
  validates :title, :content, presence: true
  validates :title, uniqueness: true
end
