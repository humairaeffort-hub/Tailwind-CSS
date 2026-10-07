function changeLayout(type) {
    const playground = document.getElementById("playground");

    playground.classList.remove(
        "justify-start",
        "justify-center",
        "justify-end",
        "justify-between",
        "justify-around",
        "justify-evenly"
    );

    playground.classList.add("justify-" + type);
}