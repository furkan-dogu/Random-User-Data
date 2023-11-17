const getUsers = async () => {
    try {
        const res = await fetch("https://randomuser.me/api/")
        if(!res.ok) {
            throw new Error()
        }
        const data = await res.json()
        show(data.results)
    } catch (error) {
        document.querySelector(".card").style.display = "none"
        const container = document.querySelector(".container")
        const img = document.createElement("img")
        img.src = "error.gif"
        container.appendChild(img)
    }
}

window.addEventListener("load", () => {
    getUsers()
})

const show = (results) => {
    const randomUser = document.querySelector(".card")

    randomUser.textContent = ""

    results.forEach((user) => {
        const img = document.createElement("img")
        img.className = "w-100"
        img.src = user.picture.medium
        img.alt = "User Avatar"
        const h5 = document.createElement("h5")
        h5.className = "text-center mt-2"
        h5.textContent = user.name.first + " " + user.name.last
        const p1 = document.createElement("p")
        p1.textContent = user.email
        const p2 = document.createElement("p")
        p2.textContent = user.phone
        const btn = document.createElement("button")
        btn.className = "btn btn-primary w-100 p-2"
        btn.textContent = "Select"

        randomUser.appendChild(img)
        randomUser.appendChild(h5)
        randomUser.appendChild(p1)
        randomUser.appendChild(p2)
        randomUser.appendChild(btn)

        btn.addEventListener("click", getUsers)
    })
}
