/*
Exercise: List of books
Description

You need to create a function listBooks that takes a stack argument and returns the books from an array, separated by a comma, but in string format

Prohibited

['Don Quixote’, 'The Great Gatsby’]

Exit

"Book 1: Don Quixote, Book 2: The Great Gatsby"
*/

// Solution 1
function listarLivros(pilha) {
    let bookList = "";
    let elementSize = pilha.length;
    
    if (elementSize === 0) {
        return "";
    }
    
    pilha.forEach((element, index) => {
        if (index === 0 && elementSize === 1) {
            bookList += `Livro ${index + 1}: ${element}.`;    
            return;
        }
        
        if (element) {
            bookList += `Livro ${index + 1}: ${element}`;
            if (index !== elementSize - 1) {
                bookList += ", ";
            }
            return;
        }
    });
    return bookList;
}


listarLivros(["abc", "cdb"]);
listarLivros(["abc"]);
listarLivros([]);

// Solution 2
function listarLivros(pilha) {
    if (pilha.length === 0) {
        return "";
    }
  
    return bookList.map((element, index) => {
         return `Livro ${index + 1}: ${element}`;
    }).join(", ");
}