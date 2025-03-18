// ***
// ***
// ***

function genPattern1(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        for (j = 0; j < n; j++) {
            line += '*';
        }
        line += ' \n';
    }
    console.log(line);
}
// genPattern1(n);


//=======================================================================================================================================================

//   * 
//   ** 
//   *** 

function genPattern2(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            line += '*';
        }
        line += ' \n';
    }
    console.log(line);
}
// genPattern2(3);


//=======================================================================================================================================================

//   1 
//   12 
//   123 
//   1234 
//   12345 

function genPattern3(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            line += `${j + 1}`;
        }
        line += ' \n';
    }
    console.log(line);
}
// genPattern3(5);


//=======================================================================================================================================================

//   1 
//   22 
//   333 
//   4444 
//   55555 

function genPattern4(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        for (j = 0; j <= i; j++) {
            line += `${i + 1}`;
        }
        line += ' \n';
    }
    console.log(line);
}
// genPattern4(5);


//=======================================================================================================================================================

//   *** 
//   ** 
//   * 

function genPattern5(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        for (j = n - i; j > 0; j--) {
            line += `*`;
        }
        line += ' \n';
    }
    // for (i = 0; i < n; i++) {
    //     for (j = n; j > i; j--) {
    //         line += `*`;
    //     }
    //     line += ' \n';
    // }
console.log(line);
}

// genPattern5(3)


//=======================================================================================================================================================

//   12345 
//   1234 
//   123 
//   12 
//   1

function genPattern6(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        for (j = n; j > i; j--) {
            line += `${n - j + 1}`;
        }
        line += ' \n';
    }
    console.log(line);
}
// genPattern6(5);


//=======================================================================================================================================================

//      *     
//     ***    
//    *****   
//   *******  
//  ********* 
// ***********

function genPattern7(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        
      for (j = 0; j < (n-i-1); j++) {
        line += " _ "
      }
      
      for (k = 0; k < (2*i+1); k++) {
        line += " * "
      }
      
      
      line += '\n\n';
    }

//     for (i = 1; i <= n; i++) {
        
//       for (j = 1; j <= (n-i); j++) {
//         line += " _ "
//       }
      
//       for (k = 1; k < (2*i); k++) {
//         line += " * "
//       }
      
//       line += '\n\n';
//     }
  console.log(line);
}
// genPattern7(5)


//=======================================================================================================================================================

// Input Format: N = 3
// Result: 

// *****  
//  ***
//   * 

function genPattern8(n) {
    let line = '';
    for (i = 0; i < n; i++) {
        
      for (j = 0; j < i;j++){
        line += " "
      }
      
      for( k= 1; k < 2*(n-i); k++ ){
        line += "*"
      }
      
      line += '\n';
    }

    // for (i = 1; i <= n; i++) {
        
    //     for (j = 1; j < (i);j++){
    //       line += " "
    //     }
        
    //     for( k= 1; k < 2*(n-i+1); k++ ){
    //       line += "*"
    //     }
        
    //     line += '\n';
    // }
  console.log(line);
}
// genPattern8(3)


//=======================================================================================================================================================

// Input Format: N = 3
// Result: 
//   *  
//  ***
// ***** 
// *****  
//  ***
//   * 

// genPattern7(3)
// genPattern8(3)


//=======================================================================================================================================================

// Input Format: N = 3
// Result: 
//   *  
//   **
//   ***  
//   **
//   * 

function genPattern10(n) {
    let line = '';
    for (i = 1; i <= 2*n -1; i++) {
      let length = i <= n ? i : (2*n-i)
      for( j= 1; j <= length; j++ ){
        line += " * "
      }
      
      line += '\n\n';
    }
      console.log(line);
}
// genPattern10(3)


//=======================================================================================================================================================

// Input Format: N = 5
// Result:   
// 1
// 01
// 101
// 0101
// 10101

function genPattern11(n) {
  let line = '';
  for (i = 1; i <= n; i++) {
    let start = i %2
    for( j= 1; j <= i; j++ ){
      line += ` ${ start } `
      start = 1-start;
    }
    
    line += '\n\n';
  }
    console.log(line);
}
// genPattern11(5)


//=======================================================================================================================================================

// Input Format: N = 3
// Result:   
// Result: 
// 1    1
// 12  21
// 123321

function genPattern12(n) {
  let line = '';
  for (i = 1; i <= n; i++) {

    for( j= 1; j <= i; j++ ){
      line += ` ${ j } `
    }
    
    for (k =0 ; k < 2*(n-i); k++){
      line+= "   "
    }
    
    for (l = i; l >= 1; l--){
      line += ` ${ l } `
    }

    line += '\n\n';
  }
    console.log(line);
}
// genPattern12(5)




//=======================================================================================================================================================


// Input Format: N = 3
// Result: 
// 1
// 2 3
// 4 5 6

function genPattern13(n) {
  let line = '';
  let start = 1
  for (i = 1; i <= n; i++) {
    
    for( j= 1; j <= i; j++ ){
      line += ` ${ start } `
      start++;
    }
    
    
    line += '\n\n';
  }
    console.log(line);
}
// genPattern13(5)


//=======================================================================================================================================================


// Input Format: N = 3
// Result: 
// A
// A B
// A B C


function genPattern14(n) {
  let line = '';
  for (i = 1; i <= n; i++) {
    let start = 65
    
    for( j= 1; j <= i; j++ ){
      line += ` ${ String.fromCharCode(start) } `
      start++;
    }
    
    
    line += '\n\n';
  }
    console.log(line);
}
// genPattern14(5)


//=======================================================================================================================================================


// Input Format: N = 3
// Result: 
// A B C
// A B
// A


function genPattern15(n) {
  let line = '';
  for (i = 1; i <= n; i++) {
    let start = 65
    
    for( j= n; j >= i; j-- ){
      line += ` ${ String.fromCharCode(start) } `
      start++;
    }
    
    line += '\n\n';
  }
    console.log(line);
}

// genPattern15(5)


//=======================================================================================================================================================


// Input Format: N = 3
// Result: 
// A
// B B
// C C C


function genPattern16(n) {
  let line = '';
  let start = 65
  for (i = 1; i <= n; i++) {
    
    for( j= n; j >= i; j-- ){
      line += ` ${ String.fromCharCode(start) } `
    }
    start++;
    
    line += '\n\n';
  }
    console.log(line);
}

// genPattern16(5);


//=======================================================================================================================================================

// Input Format: N = 3
// Result: 
//   A  
//  ABA 
// ABCBA


// Input Format: N = 6
// Result:   
//      A     
//     ABA    
//    ABCBA   
//   ABCDCBA  
//  ABCDEDCBA 
// ABCDEFEDCBA


function genPattern17(n) {
  let line = '';
  for (i = 1; i <= n; i++) {
    
    for (j = 1; j < (n-i+1); j++) {
      line += "   "
    }
    
    let start = 65
    for (k = 1; k <= (2*i)-k; k++) {
      line += ` ${String.fromCharCode(start)} `
      start++;
    }

    for( l= 1; l < i; l++ ){
      line += ` ${String.fromCharCode(start-2)} `
      start--;
    }
    
    line += '\n\n';
  }
    console.log(line);
}

// genPattern17(5)


//=======================================================================================================================================================

// Input Format: N = 3
// Result: 
// C
// B C
// A B C

// Input Format: N = 6
// Result:   
// F
// E F
// D E F
// C D E F
// B C D E F
// A B C D E F


function genPattern18(n) {
  let line = '';
  for (i = 1; i <= n; i++) {
    start = 65 + (n - i );

    for (j = 1; j <= i; j++) {
      line += ` ${String.fromCharCode(start)} `
      start++;
    }
    start --
    
        
    line += '\n\n';
  }
    console.log(line);
}

// genPattern18(6)



//=======================================================================================================================================================

