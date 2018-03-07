class DynamicProgramming

  def initialize
    @blair_cache = { 1 => 1, 2 => 2 }
    @frog = { 1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
  end

  def blair_nums(n)
    return @blair_cache[n] if n < 3

    (3..n).each do |i|
      @blair_cache[i] ||= @blair_cache[i - 1] + @blair_cache[i - 2] + (2 * (i - 2)) + 1
    end

    @blair_cache[n]
  end

  def frog_hops_bottom_up(n)
    frog_cache_builder(n) unless @frog[n]

    @frog[n]
  end

  def frog_cache_builder(n)
    (@frog.length + 1..n).each do |i|
      poss1 = @frog[i - 1].map { |el| el + [1]}
      poss2 = @frog[i - 2].map { |el| el + [2]}
      poss3 = @frog[i - 3].map { |el| el + [3]}
      @frog[i] = poss1 + poss2 + poss3
    end
  end

  def frog_hops_top_down(n)
    
  end

  def frog_hops_top_down_helper(n)

  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
