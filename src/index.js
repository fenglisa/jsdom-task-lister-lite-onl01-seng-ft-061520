document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("create-task-form").addEventListener("submit", function(e) {
    event.preventDefault();
    const newLi = document.createElement("li");
    newLi.innerText = document.getElementById("new-task-description").value
    document.getElementById("tasks").appendChild(newLi);
    e.target.reset();
  });
});
