let list1 = [], list2 = []
// [1,1,2,3,4,4]

// [1,3,4,5] [1,4,6,8]
// [1,2,3,4,4,5,6,8]
function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
}
var mergeTwoLists = function(list1, list2) {

  let dummyNode = new ListNode(10)
  let head = dummyNode
  while(list1 && list2){
    if(list1.val <= list2.val){
      dummyNode.next = list1
      list1 = list1.next
    } else {
      dummyNode.next = list2
      list2 = list2.next
    }
    dummyNode = dummyNode.next
  }

  if(list1 !== null){
    dummyNode.next = list1
  } else {
    dummyNode.next = list2
  }
  console.log(head)
  return head.next
};

mergeTwoLists(list1,list2)