class DynamicProgramming

  def initialize
    @blair_cache = { 1 => 1, 2 => 2 }
    @frog = { 1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
    @frog_top_down = { 1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
    @super_frog = { 1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
    @knap = [[]]
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
    frog_hops_top_down_helper(n)


    @frog_top_down[n]
  end

  def frog_hops_top_down_helper(n)
    return if n == 1
    frog_hops_top_down_helper(n - 1)
    if n > 3
      poss1 = @frog_top_down[n - 1].map { |el| el + [1]}
      poss2 = @frog_top_down[n - 2].map { |el| el + [2]}
      poss3 = @frog_top_down[n - 3].map { |el| el + [3]}
      @frog_top_down[n] = poss1 + poss2 + poss3
    end
  end

  def super_frog_hops(n, k)
    return [[1] * n] if k == 1
    return @super_frog[n] if @super_frog[n]
    value = []
    n.downto(2) do |idx|
      if k >= (n - idx + 1)
        value += super_frog_hops(idx - 1, k).map { |arr| [n - idx + 1] + arr }
      end
    end

    @super_frog[n] = value
    @super_frog[n]
  end

  def knapsack(weights, values, capacity)
    p weights
    return 0 if capacity == 0
    @knap = Array.new(weights.length, Array.new(capacity + 1, 0))
    (1..capacity).each do |j|
      (0..weights.length - 1).each do |i|
        if ( j < weights[i] )
          @knap[i][j] = @knap[i - 1][j]
        else
          @knap[i][j] = [(values[i] + @knap[i - 1][j - weights[i]]), (@knap[i - 1][j])].max
        end
      end
    end
    p@knap
    @knap[weights.length - 1][capacity]
  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
