/**
 * 일종의 가방(bag), 컨테이너(container)
 * LIFO(Last-In-First_Out) 후입선출
 */

const stack = [];
let maxSize = 10;
let top = -1;

function isFull(stack) {
  return stack.length === maxSize;
}

function isEmpty(stack) {
  return stack.length === 0;
}

function push(stack, item) {
  if (isFull(stack)) console.log("스택이 가득참");

  stack.push(item);
  console.log("데이터가 추가되었음.");
}

function pop(stack) {
  if (isEmpty(stack)) console.log("스택이 비어있음.");
  stack.pop();
}

console.log(isFull(stack));
console.log(isEmpty(stack));
stack.push(1);
stack.push(2);
console.log(stack);
console.log(isFull(stack));
console.log(isEmpty(stack));
