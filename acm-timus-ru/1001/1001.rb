arr = $stdin.read.split(' ').map { |n| (n.to_i ** 0.5) }.to_a
arr.reverse.each { |x| puts "#{'%.4f' % x}" }
