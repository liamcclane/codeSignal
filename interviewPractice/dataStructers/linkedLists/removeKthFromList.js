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

let n1 = new ListNode(3);
let n2 = new ListNode(1);
let n3 = new ListNode(2);
let n4 = new ListNode(3);
let n5 = new ListNode(4);
let n6 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
console.log(n2)
console.log(removeKFromListAnswer(n1, 3));

function ListNode(x) {
    this.value = x;
    this.next = null;
}

function removeKFromListAnswer(l, k) {
    let dummy = new ListNode();
    dummy.next = l;
    let current = dummy;

    while (current.next) {
        if (current.next.value === k) {
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
}

// below code almost ran, but had an off by one error.
function removeKFromList(l, k) {
    // let result = new ListNode(1);
    let r = l;
    let p = r;

    // these conditionals move the two pointers together if
    // the first values are equal to each other
    // else we will have the runner, r, one node in from of the 
    // previous,p, pointer
    if (r.value == k) {
        r = r.next;
        p = p.next;
    } else {
        r = r.next;
    }

    let head = p;

    // this while loop looks all the way down the list with a runner 
    // and a preivous overwritting if the value is equal to k
    while (r.next) {
        console.log(`r.value is ${r.value}`);
        console.log(`r.next.val is ${r.next.value}`);
        console.log(`p.value is ${p.value}\n`);
        if (r.value == k) {
            // something is wrong here.....
            // not overwritting for some reason..
            p.next = r.next;
            // console.log(`inside the if and p.val is ${p.value}`)
            // console.log(`\tp.next.val is  ${p.next.value}`)
            r.next = null;
            r = p.next;
        }
        p = p.next;
        if (r) {
            r = r.next;
        }
        // console.log(`end of while \nr.value is now ${r.value}`);
        // console.log(`r.next.val is ${r.next.value}`);
        // console.log(`p.value is ${p.value}\n`);
    }
    if (r.value == k) {
        p.next = r.next;
        r = r.next;
    }

    return head;

}
