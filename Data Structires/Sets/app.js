// A set is an unordered collection of related members in which no member occurs more than once.  A set that doesnt contain any element is often called null set. Below is a typical representation of set:
// Union - This is wherein a new set is constructed by combining the members of one set with the members of another set.

// Intersection - This is wherein a new set is constructed by adding all the members of one set that also exist in a second set.

// Difference - This is wherein a new set is constructed by adding all the members of one set except those that also exist in a second set.

	


const set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)

const set2 = new Set()
set2.add(3)
set2.add(4)
set2.add(5)

// #problem

// Let us implement a set different (A - B) method. Fix the following function to return all the elements that exist in the current set but not in the otherset passed as parameter.
// we create a new set
  // create a counter = 0
  // add current set to the new set with push
  // we do a if statement and check if the new set hast the properties of the second set 
  // if it does we do not add it, if it doesnt we add it the counter and return it 
function diff(secondSet) {
  let counter = 0
  const newSet = new Set()
  set1.forEach(el => newSet.add(el))
  set2.forEach(el => {
    if(!newSet.has(el)){
      counter++
    }
  })
  console.log(counter)
  

}

diff(set2)