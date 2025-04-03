function reverseArray(arr) {
    try {
        // let resp = arr.reduce((acc,curr) => {
        //     acc[arr.length - arr.indexOf(curr) -1 ] = curr;
        //     return acc;
        // },[] )

        let resp = Array.from( 
            { length: arr.length }, 
            
            ( _ , i) => arr[arr.length - 1 - i] 
         );

        return resp;
    } catch (error) {
        console.log(error)
    }
}

let input = [1,2,3,4]
// console.log(reverseArray(input))

