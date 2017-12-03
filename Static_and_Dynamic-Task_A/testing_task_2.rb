### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

def function_1(value)
  if value == 1
    return true
  else
    return false
  end
end

def max(a, b)
  if a > b
    return a
  else
    return b
  end
end

def looper
  for i in 1..10
    p i
  end
  return i
end

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures += 1
end


if function_1(3) == false
  puts "function_1(3) passed"
else
  puts "function_1(3) failed"
  failures += 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "max(100,1) failed"
  failures += 1
end


if failures > 0
  puts "Test Failed"
else
  puts "Test Passed"
end
