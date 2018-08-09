class Contract < ApplicationRecord
  belongs_to :user, optional: true
  belongs_to :supplier
  validates :salary, numericality: {greater_than_or_equal_to: 20000}
end
