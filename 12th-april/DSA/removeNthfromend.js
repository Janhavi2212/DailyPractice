var removeNthFromEnd = function(head, n) {
    if(head.next==null){
        head=head.next
        return head
    }

let slow=head,fast=head;

for(i=1;i<=n;i++){
    fast=fast.next
}
while(fast!==null && fast.next!==null){
    slow=slow.next;
    fast=fast.next
}
slow.next=slow.next.next
return head
};





///
// var removeNthFromEnd = function(head, n) {
//     if(!head){
//         return null
//     }

// let slow=head,fast=head;

// for(i=0;i<n;i++){
//     if(!fast){
//         return head
//     }
//     fast=fast.next
// }
// if(!fast) return head.next
// while(fast!==null && fast.next!==null){
//     slow=slow.next;
//     fast=fast.next
// }
// slow.next=slow.next.next
// return head
// };
