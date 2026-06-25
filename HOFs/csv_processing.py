import csv
from functools import reduce
'''

Functional Programming (declarative)

Lets start with creating the count() function.

Inside the count() function, write a filter() function that will “filter” itr based on predicate. Save this value to a variable called count_filter.
'''
def count(predicate, iterable):
  count_filter = filter(lambda item: predicate(item), iterable) 
  count_reduce = reduce(lambda acc, item: acc + 1, count_filter, 0)
  return count_reduce# Remove this keyword when you start working on this function.    

'''
Let’s create the average() function that will compute an average recursively. This is something you may not have seen before, so we will walk you through it.

The average() function will contain a helper function called avg_helper() that will be responsible for implementing a loop to compute an average.

Create a function called avg_helper() That accepts the following three parameters:

curr_count: represents the current count of elements.
itr: represents the collection.
curr_sum: represents the current running total of elements in the collection.
'''

def avg_helper(curr_count, itr, curr_sum):
  next_num = next(itr, "null")

  # if(next_num != "null"):
  #   curr_sum += next_num
  #   curr_count += 1
  #   avg_helper(curr_count, itr, curr_sum)
  # else:
  #   return curr_sum/curr_count
  next_num = next(itr, "null")
  # base case
  if next_num == "null":
    return curr_sum/curr_count
  # computation
  curr_count += 1
  curr_sum += float(next_num)
  # recursive call
  return avg_helper(curr_count, itr, curr_sum)
  
def average(itr):
  # If itr is not iterable, this will generate an iterator.  
  iterable = iter(itr)
  return avg_helper(0, itr, 0) 

with open('1kSalesRec.csv', newline = '') as csvfile:
  reader = csv.reader(csvfile, delimiter=',', quotechar='|')
  fields = next(reader)
  count_belgiums = count(lambda x: x[1] == "Belgium"
, reader)
  print(count_belgiums)
  csvfile.seek(0)

  avg_portugal = average(map(lambda x: x[13], filter(lambda x: x[1] == "Portugal", reader)))
  print(avg_portugal)