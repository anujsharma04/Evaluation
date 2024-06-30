var url = "http://localhost:3000/tasks"

//  var form = document.querySelectorAll("form")
document.addEventListener("submit", function () {
    event.preventDefault()
    var title = document.getElementById("input1").value
    var description = document.getElementById("input2").value
    var status = document.getElementById("input3").value
    var dueDate = document.getElementById("input4").value

    let obj = {
        title,
        description,
        status,
        dueDate
    }
    console.log(obj)

    let res = fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(obj)
    })
    window.location.href = "index.HTML"
})