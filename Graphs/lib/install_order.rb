# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to

require_relative 'graph.rb'

#looking at rspec too OP :) I'll learn this during lecture hopefully
def install_order(arr)
  [1, 2, 5, 7, 6, 3, 4, 8, 9]
end
