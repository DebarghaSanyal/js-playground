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
