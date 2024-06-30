let url = "http://localhost:3000/tasks"

var container = document.getElementById("container")

// let url1 = `${url}_page=1&_limit=5`;

geturl(`http://localhost:3000/tasks?_page=1&_limit=5`)


let count = 1;
document.getElementById("previous").addEventListener("click", function () {
    count--;
    let url2 = `${url}?_page=${count}&_limit=5`
    geturl(url2)
})

document.getElementById("next").addEventListener("click", function () {
    count++;
    let url2 = `${url}?_page=${count}&_limit=5`
    geturl(url2)
})

async function geturl(recurl) {
    try {
        let response = await fetch(recurl);
        let res = await response.json()
        console.log(res)
        getdata(res);
    } catch (error) {
        console.log(error)
    }
}

document.getElementById("add").addEventListener("click", function () {
    window.location.href = "addtask.HTML"
})

function getdata(arr) {
    container.innerHTML = "";
    arr.forEach(element => {
        var card = document.createElement("div")
        card.id = "card"

        var title = document.createElement("h2")
        title.textContent = `Title : ${element.title}`

        var desc = document.createElement("p")
        desc.textContent = element.description

        var status = document.createElement("h4")
        status.textContent = `Status : ${element.status}`
        var date = document.createElement("h3")
        date.textContent = `DueDate : ${element.dueDate}`

        var edit = document.createElement("button")
        edit.textContent = "Edit"

        edit.addEventListener("click", function () {

        })

        var del = document.createElement("button")
        del.textContent = "Delete"

        del.addEventListener("click", async function () {
            let D = await fetch(`${url}/${element.id}`, {
                method: "DELETE"
            })
            geturl();
        })

        card.append(title, desc, status, date, edit, del)
        container.append(card)

    });
}