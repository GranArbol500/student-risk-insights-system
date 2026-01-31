document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let math = Number(document.getElementById("math").value);
    let reading = Number(document.getElementById("reading").value);
    let writing = Number(document.getElementById("writing").value);

    let average = (math + reading + writing) / 3;
    let status = average >= 85 ? "Excellent" : average >= 60 ? "Average" : "At Risk";

    localStorage.setItem("result", JSON.stringify({
        name,
        average: average.toFixed(2),
        status
    }));

    window.location.href = "dashboard.html";
});
