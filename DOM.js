//  Document Object Model

console.log("This is DOM");

//DOM
//  window -> document -> HTML -> (head,body) body -> (div,script) div-> (img,h,p,div)
// head -> (meta,title,link)

let el_id = document.getElementById("id");
let el_cl = document.getElementsByClassName("class");
let el_tg = document.getElementsByTagName("Tag");


//Query selector (autometically detects selector)  returns node list
// Select the 1st node (id/tag/class) of same name
let q = document.querySelector("#id");
let q1 = document.querySelector(".class");
let q2 = document.querySelector("tag");
console.log(q); // returns the html code
console.dir(q); // returns the colection of nodes

// Selects all nodes (id/tag/class) of same name
let qAll = document.querySelectorAll("#id");
let qAll1 = document.querySelectorAll(".class");
let qAll2 = document.querySelectorAll("tag");

// DOM Manipulation ===================================================================
{
    {
        // tag name
        let tg = document.querySelector("p");
        console.log(tg.tagName);    // prints p (The tag name)

        {
            // children
            let child = document.querySelector("div").children;
            console.log(child);    // prints all the child nodes of the 1st div

            console.log(document.querySelector("div").lastChild); // prints the last chield of that div
            console.log(document.querySelector("div").firstChild); // prints the first chield of that div

            // document.querySelector("div").lastChild.textContent;      // prints the text content of the lastchild 
            // document.querySelector("div").lastChild.COMMENT_NODE;
            // document.querySelector("div").lastChild.ELEMENT_NODE;
        }

        // inner text
        let text = document.querySelector("div");
        console.dir(text);  // prints all details
        console.log(text.innerText);    // prints only the text present in the div

        // inner html
        let htm = document.querySelector("div");
        console.log(htm.innerHTML);     // prints the html of that div

        // text content
        let hi_text = document.querySelector("div");
        console.log(hi_text.textContent);   // use to show even the hidden texts (style=" display= hidden; ")
    }

}