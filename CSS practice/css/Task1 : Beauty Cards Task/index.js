let body_container;
let header;

function createHeader()
{
    body_container = document.querySelector(".body-container");
    header = document.createElement("div");
    header.className="header";
    body_container.appendChild(header);
    let lorem = document.createElement("h3");
    document.getElementsByTagName("h3").innerHTML="HAHA";
    // lorem.appendChild("Lorem Ipsum");
    header.appendChild(lorem);

}

createHeader();