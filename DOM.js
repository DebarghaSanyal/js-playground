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

    // Attribute ============================================================================
    {
        // getAttribute
        {
            let att = document.querySelector("p");  // use to get the attribute of that tag/class/id
            console.log(att.getAttribute("class")); // class/tag/id

            let div = document.querySelector("div");
            // console.log(div);                       // will not work for querySelectorAll()
            // console.log(div.innerText);  
            console.log(div.getAttribute("id"));
        }
        //setAttribute
        {
            let att = document.querySelector("p");
            att.setAttribute("class", "setAttribute");  // changes class name (Element) console->undefined

            //att/setAttribute("what we want to change [class/id]", "new name");

            console.log(att.getAttribute("class"));     // new class name (class_Of_paragraph -> setAttribute)
        }
        // style
        {
            let ul = document.querySelector("ul");      // selects the 1st ul of our html code
            ul.style.color = "red";                     // changes the ul color from white -> red
        }
    }

    // Insert element   ===========================================================================
    {
        let newElement = document.createElement("button");  // (what we want to create)
        newElement.innerText = "Click me!";                 // add some attributes

        let newele = document.querySelector(".box");        // where to add

        {
            // append to add in end of .box
            newele.append(newElement);
            // prepend to add in start of .box
            //    newele.prepend(newElement);
            // before to add before of .box
            //    newele.before(newElement);
            // after to add after of .box
            //    newele.after(newElement);
        }

        let newHead = document.createElement("h2");
        newHead.innerHTML = "<i>DOM Manipulation</i>";
        newHead.style.color = "dodgerblue";
        newHead.style.textAlign = "center";
        newele.before(newHead);

        // hides the button on click
        function hid() {
            newElement.style.visibility = "hidden";
        }
        newElement.onclick = hid;
    }

    // remove element   ====================================================================
    {
        let rmv = document.querySelector(".para");
        rmv.remove();

        // To remove a specified element when knowing its parent node:
        const parent = document.getElementById("parent");
        const child = document.getElementById("child");
        const throwawayNode = parent.removeChild(child);

        //To remove a specified element without having to specify its parent node:
        const node = document.getElementById("child1");
        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }

        //To remove all children from an element:
        // const element = document.getElementById("parent");
        // while (element.firstChild) {
        //     element.removeChild(element.firstChild);
        // }

        {
            let i = 4;
            function makechilde() {
                let n = document.createElement("div");
                n.innerText = `child ${i++}`;
                parent.append(n);
            }

        }
    }
    
}