/**
 * Note: Try to solve this task in O(n) time using O(1) additional space, 
 * where n is the number of elements in the list, 
 * since this is what you'll be asked to do during an interview.
 * 
 * Given a singly linked list of integers l and an integer k, 
 * remove all elements from list l that have a value equal to k.
 * 
 * Example
 * 
    * For l = [3, 1, 2, 3, 4, 5] and k = 3, the output should be
    * removeKFromList(l, k) = [1, 2, 4, 5];
    * 
    * For l = [1, 2, 3, 4, 5, 6, 7] and k = 10, the output should be
    * removeKFromList(l, k) = [1, 2, 3, 4, 5, 6, 7].
 * 
 */
// Singly-linked lists are already defined with this interface:
function ListNode(x) {
  this.value = x;
  this.next = null;
}
//
function removeKFromList(l, k) {
    let result = new ListNode(1);

    while(l != null){
    
        if(l.next.value == k){
            // let temp = new ListNode(l.)
            // l.next = l.next.next;
            // console.log(`val is ${l.value}`);
        }
        l = l.next;
    }

    return result;

}

let n1 = new ListNode(11);
let n2 = new ListNode(12);
let n3 = new ListNode(13);
let n4 = new ListNode(14);
let n5 = new ListNode(15);

n1.next = n2;
n2.next = n3;
n3.next = n4;

console.log(removeKFromList(n1,14));