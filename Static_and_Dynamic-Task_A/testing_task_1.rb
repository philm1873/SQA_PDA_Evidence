### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val #missing parentheses '()' around 'val', debatable naming convention, probably should be 'function_1' and 'val' should be 'value'
  if val = 1  #shoud use relational operator '=='
  return true #should be written indented once more to the right
  else
  return false #should be written indented once more to the right
  end
end

dif max a b #'dif' shoud be 'def', 'max a b' should be written 'max(a, b)'
  if a > b
      return a #indented too far, should be one indentation to the left
  else
  b #should have 'return' before 'b'. Should be indented once more to the right
  end
end
end #incorrect number of 'end's, this one should be removed

def looper
  for i in 1..10
  puts i #incorrect indentation - should be one more to the right. 'i' isn't a string so should use 'p' rather than 'puts'
  end
end #should have 'return i' before end, this is okay since keyword loops' variables' scope is outside of loop

failures = 0

if looper == 10
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1 #more optimal to use failures += 1
  #missing 'end'


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1 #more optimal to use failures += 1
end


if max(100,1) == 100
  puts "max(100,1) passed"
else
  puts "func1(3) failed" #should be "max(100,1) failed"
  failrues = failures + 1 #failures misspelt
end


if failures #shoud read 'if failures > 0'
  puts "Test Failed"
else
  puts "Test Passed"
end
