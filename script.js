//  alert("Wanna refresh ?"); // popup on refresh
//  let userInput = prompt("Enter data: "); // [prompt()] pop-up enter data    console.log(userInput);
{
    let a = 'Debargha'
    console.log(a);
    a = "s"
    console.log(a);
    const pi = 3.14
    console.log(pi);
    let c = true
    console.log(c);

    const student = {
        name: "Debargha",
        roll: 113,
        sec: 'B',
        yr: "3rd",
    };
    console.log(student);
    student.sec = "B-Y";
}
{
    let a = 5
    let b = 3
    console.log("a+b=", a + b);
    console.log("a^b=", a ** b); //a^b
    console.log("a(3)^a(3)=", 3 ** 3); //a^a
}
{
    let a = 5
    let b = 5
    let c = "5"
    console.log("a==b", a == b) //true
    console.log("a==c", a == c) //true (string converts into int and get checked)
    console.log("a===c", a === c) //false (ctrictly checks whether the datatypes are same or not)
    console.log("a!==c", a !== c) //true (ctrictly checks whether the datatypes are same or not)
}
// loop for string
{
    let str = "Tony";
    let size = 0;
    for (let val of str) {
        console.log(val);
        size++;
    }
    console.log("size = ", size);
}
// loop for array or object
{
    const student = {
        name: "Debargha",
        roll: 113,
        sec: 'B',
        yr: "3rd",
    };
    for (let key in student) {
        console.log("key = ", key, "&& value = ", student[key]);
    }
}
// even numbers
// {
//     for (let i = 1; i <= 100; i++){
//         if (i % 2 === 0)
//             console.log(i);
//     }
// }


{
    // `` -> is a special type of string in which we can print the value of element as well
    let obj = {
        item: "pen",
        price: 10,
    };
    console.log("The", obj.item, "cost around ", obj.price, "rupees");
    //Template Literals // string interpolation
    let op = `The ${obj.item} cost around ${obj.price} rupees`;
    console.log(op);
}

// string manipulation  ==================================================================
{
    {
        //we can't change the main str (immutable) but we can store the changed str in a new str
        let str = "sdfsfYG";
        let len = str.length;
        let newStr = str.toLowerCase();
        let newestStr = str.toUpperCase();
        console.log(`${str} \t ${len} \t ${newStr} \t ${newestStr}`); //converts everything into string
        console.log(str, len, newStr, newestStr);

        //removes spaces form start and end (trim())
        let s = "    fsd fs       ";
        console.log(s, "\n", s.trim());

        //substring (slice(start,end+1));
        let s1 = "Hello_vs_code";
        let s2 = s1.slice(2, 7);
        console.log(s1, "\t", s2);

        //combines 2 string (concate())
        let s3 = str.concat(s1);
        let s_ = str + s1;
        console.log(s3);
        console.log(s_);

        //replace element for 1 time
        let s4 = s3.replace('_', '()');
        console.log(s4);
        //replate element for the whole str
        s4 = s3.replaceAll('_', '()');
        console.log(s4);

        //s4.chatAt(3);
    }
    // {
    //     let user = prompt("Enter user name");
    //     console.log(`Use ID: @${user}${user.length}`);
    // }
    {
        console.log("\nincludes and indexOf method");
        const browserType = "mozilla";

        if (browserType.includes("zilla")) {
            console.log("Found zilla!");
        } else {
            console.log("No zilla here!");
        }

        const tagline = "MDN - Resources for developers, by developers";
        console.log(tagline.indexOf("developers")); // 20

    }

}

// array ====================================================================================
{
    {
        // add extra element at the end of an array
        {
            console.log("\npush pop toString method");
            let val = [10, 20, 30, 40];
            console.log(val);
            val.push(50, 60);   //add to end
            console.log(val);
            let del = val.pop();
            console.log(`${val} \ndeleted item = ${del}`);

            console.log(val.toString());
        }
        // add extra element at the start of an array
        {
            console.log("\nunshift shift method");
            let val = [10, 20, 30, 40];
            console.log(val);
            val.unshift(0);   //add to start
            console.log(val);
            let del = val.shift();
            console.log(`${val} \ndeleted item = ${del}`);
        }

        //also work slice method as string do. [subarray]
        //slice(start_idx,end_idx+1);

        // changes in main array
        // splice(start_idx, del_count, items_i_need_to_add)
        {
            console.log("\nslice method");
            let arr = [9, 8, 7, 6, 5];
            let a1 = arr.slice(1, 4);
            console.log(a1);

            console.log("\nsplice method");
            console.log(arr);
            arr.splice(1, 3, 101, 102);
            console.log(arr);
        }


    }
    // we can not concate 2 arrays in a same array, instade we have to store it in a different array
    {
        console.log("\nconcate method");
        let a = [1, 2, 3, 4, 5];
        let b = ["a", "b", "c", "d", "e"];
        let d = [true, false];
        let c = a.concat(b, d);
        console.log(c);
        // a = a.concate(b);        will not work
        // console.log(a);
    }

}

//Functions =====================================================================
{
    {
        function newFunc(parameter) {
            console.log(parameter);
        }

        newFunc("This is a function call"); // argument

    }
    newFunc("This is a function call"); // argument

    // arrow function (short hand call of normal function)
    //we can't put it in {}

    const arrowFunc = (a, b) => {
        console.log(a + b);
    };
    const arrowFunc1 = (a, b) => {
        return (a * b);                 // will not work
    };

    arrowFunc(10, 20);
    arrowFunc1(10, 20);

    /*  HIgher order function/method is a function which passes functions as a parameter or returns a function [forEach()] */

    {
        //Specially used for arrays
        console.log(`\nCall_back method`);
        //A callback is a function passes as an argument to another function
        let arr = [1, 2, 3, 4];
        arr.forEach(function f(val) {
            console.log(val);
        });
        //example
        arr.forEach((val) => {
            console.log(val, "   ", val * val);
        });
        //using arrow function (mostly use)
        arr = ["a", "b", "c"];
        arr.forEach((val) => {
            console.log(val.toUpperCase());
        });
        arr.forEach((val, idx, arr) => {                  //we can also send the index and the array itself
            console.log(val.toUpperCase(), idx, arr);
        });
    }

    // we use forEach to perform some task/calculations
    // we use map to perform some task and also return a new array after performing the task
    {
        let arr = [2, 4, 6];
        let newArr = arr.map((val) => {
            return val * val;
        });
        console.log(arr, newArr);

        {
            let a = newArr.forEach((val) => {   //will not work
                return val / 2;
            });
            console.log(a);
        }
        // for in == index
        // for of == element

    }
    // filter method
    {
        console.log("\nFilter method");
        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        let b = a.filter((val) => {     // filters out the odd elements from array a and store it into array b
            return val % 2 !== 0;
        });
        console.log(`Odd elements = ${b}`);
    }
    // reduce method
    // Performs some operations and reduces the array to a single value.
    {
        console.log("\nReduce method");
        //taking input from user. (Entered elements from prompt assigned as string)
        // let arr = [];
        // let input = prompt("Enter elements");
        // arr = input.split(" ").map(Number); 
        let arr = [1, 2, 3, 4, 5];
        let ans = arr.reduce((res, val) => {
            return res + val;
        });
        console.log("Sum = ", ans);
    }

}