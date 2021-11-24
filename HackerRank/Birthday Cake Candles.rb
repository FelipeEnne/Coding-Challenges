#!/bin/ruby

require 'json'
require 'stringio'

# Complete the birthdayCakeCandles function below.
def birthdayCakeCandles(ar)
    #p ar
    
    max = ar.max
    #p max
    count_max =  ar.count(max)
    #p count_max
    
    result = count_max
    
    result
    

end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

ar_count = gets.to_i

ar = gets.rstrip.split(' ').map(&:to_i)

result = birthdayCakeCandles ar

fptr.write result
fptr.write "\n"

fptr.close()
