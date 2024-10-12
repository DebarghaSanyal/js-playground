let Break = '\n'.repeat(2);

// In synchronous programming the compiler checks code from line by line and if some line gets an error/delay then the rest of the code gets stuck
{
    console.log(1);
    // console.log(2; here the rest of the code gets stuck
    console.log(3);
}
console.log(Break);
// In Asynchronous programming the delayed code gets waited until the op is collected form API/Database. Until then the rest of the code gets ececuted
// setTimeout
{
    function data(data) {
        setTimeout(() => {
            console.log("ID = ", data);
        }, 2000); // 2s == 2000ms
    };
    data(1);
    data(2);    // in this case both the function sets their time 2s however we want data1 then 2s -> data2

    function getdata(data, nextData) {
        setTimeout(() => {
            console.log("Getting data", data, "...\nData = ", data);
            if (nextData) {                 // if the next data/callback present only then the next data function gets executed
                nextData();
            }
            else {
                console.log(Break);
            }
        }, 2000);
    };
    getdata(1, () => {  // we send call backs as a function but without ()
        getdata(2, () => {
            getdata(3, () => {
                getdata(4);         // this nesting is also knowne as Hell callback
            });
        });
    });
}

//  Promise (use to solve hell callback/doom's pyramid problem)
{
    let Pro = new Promise((resolve, reject) => {
        console.log("Collected!");
        resolve("succsess.");
    })
    console.log(Pro);

    const getPromise = () => {
        return new Promise((resolve, reject) => {
            console.log("GOT");
            resolve("resolved!!!");
            // reject("rejected!!!");
        })
    };
    Promise1 = getPromise();
    Promise1.then((res) => {
        console.log("Data have been featched!", res);
        console.log(Break);
    });
    Promise1.catch((err) => {
        console.log("Could not featch!", err);
    });
}
// promise chain to solve callback hell
{
    function getdata1(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(`DONE ${data}`);
                resolve(`DONE ${data}`);
            }, 4000);
        });
    }
    try {                                   // concept of try catch block
        // getdata1(1).then((res) => {
        //     console.log(res);
        //     getdata1(2).then((res) => {
        //         console.log(res);
        //         // and so on......
        //     });
        // });

        // promise chaining
        getdata1(1).then((res) => {
            return getdata1(2);
        }).then((res) => {
            return getdata1(3);
        }).then((res) => {
            return getdata1(4);
        }).then((res) => {
            console.log("END! WITH SUCCESS!");
        });
    } catch (err) {
        console.log(err);
    }
}

// async await (use to set sequence between api calls/data returns)

// A async function always returns a promice
async function hello() {
    console.log("1st async function!");
}

// for a callback promice it will return all data when callback time is over however we want to
// execute data once the previous data have been executed first, instade of using callback hell or
// promise chaining we can use async await to simplify the task.

{
    async function name(params) {
        await api();
        await api();    // waits untile the previous function call gets executed
        await api();    // waits untile the previous function call gets executed
    }
}
