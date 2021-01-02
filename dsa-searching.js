/**
 * 1. How many searches
 * 12, 6, 11, 8
 * 12, 17, 15, -1
 */

/**
 *2. Adding a React UI
 */
// class SearchInput extends Component {
//   state = {
//     dataset: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
//     input: null,
//     message: ''
//   };

//   linearSearch = () => {
//     for (let i = 0; i < this.state.dataset.length; i++) {
//       if (this.state.dataset[i] === this.state.input)
//         return this.setState({ message: `Found in ${i} searches.` })
//     }
//     this.setState({ message: `Could not find input. ${i} searches.` })
//   }

//   binarySearch = () => {
//     let start = 0;
//     let end = this.state.dataset.length - 1;
//     let middle;
//     let count = 0;
//     while (start <= end) {
//       middle = Math.floor((start + end) / 2);
//       if (this.state.dataset[middle] === this.state.input) {
//         return this.setState({ message: `Found in ${count + 1} searches.` })
//       } else {
//         if (this.state.input < this.state.dataset[middle])
//           end = middle - 1;
//         else
//           start = middle + 1;
//       }
//       count++;
//     }
//     this.setState({ message: `Could not find input. ${count} searches.` })
//   }

//   onSubmit = () => {
//     //linearSearch();
//     binarySearch();
//   }

//   render() {
//     <>
//       <form id='search'>
//         <input
//           type='number'
//           onChange={(e) => this.setState({ input: e.target.value })}
//         />
//         <button type='submit' onSubmit={(e) => this.onSubmit(e)}>Submit</button>
//       </form>
//       <output form='search'>{this.state.message}</output>
//     </>
//   }
// }

/**
 * 3. Find a book
 * I would do a binary search for each section of the Dewey until the book is found.
 */
function findBook(books, dewey, title) {
  dewey = dewey.split('.');
  for (let i = 0; i < dewey.length; i++) {
    let deweySection = dewey[i];
    let start = 0;
    let end = books.length - 1;
    let middle;
    while (start <= end) {
      middle = Math.floor((start + end) / 2);
      if (books[middle].deweySection === deweySection) {
        if (books[middle].book) return books[middle].book;
        else books = books[middle].books;
        break;
      } else {
        if (deweySection < books[middle]) end = middle - 1;
        else start = middle + 1;
      }
    }
  }
  throw new Error('Could not find book');
}

/**
 * 4. Searching in a BST
 * 1) 14 19 15 27 25 79 90 91 89 35
 * 2) 8 6 5 7 10 9 11
 */

/**
 * 5. Implement different tree traversals
 */
function preOrder(bst, values = []) {
  if (!bst) return values;
  values.push(bst.key);
  values = preOrder(bst.left, values);
  values = preOrder(bst.right, values);
  return values;
}

function inOrder(bst, values = []) {
  if (!bst) return values;
  values = inOrder(bst.left, values);
  values.push(bst.key);
  values = inOrder(bst.right, values);
  return values;
}

function postOrder(bst, values = []) {
  if (!bst) return values;
  values = postOrder(bst.left, values);
  values = postOrder(bst.right, values);
  values.push(bst.key);
  return values;
}

// const BinarySearchTree = require('./bst');
// const bst = new BinarySearchTree();
// bst.insert(25, 25);
// bst.insert(15, 15);
// bst.insert(50, 50);
// bst.insert(10, 10);
// bst.insert(24, 24);
// bst.insert(35, 35);
// bst.insert(70, 70);
// bst.insert(4, 4);
// bst.insert(12, 12);
// bst.insert(18, 18);
// bst.insert(31, 31);
// bst.insert(44, 44);
// bst.insert(52, 52);
// bst.insert(90, 90);
// bst.insert(22, 22);
// console.log(preOrder(bst));
// console.log(inOrder(bst));
// console.log(postOrder(bst));

/**
 * 6. Find the next commanding officer
 */
function findNextCommandingOfficer(bst, people=[]) {
  if (!bst) return people;
  people = findNextCommandingOfficer(bst.left, people);
  people.push(bst.value);
  people = findNextCommandingOfficer(bst.right, people);
  return people;
}

/**
 * 7. Max profit
 */
function maxProfit(arr) {
  let min = arr[0];
  let maxProfit = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] - min > maxProfit) maxProfit = arr[i] - min;
  }
  return maxProfit;
}
console.log(maxProfit([128, 97, 121, 123, 98, 97, 105]));