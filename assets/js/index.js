// Array of sample course suggestions; replace with a dynamic fetch if available
const courses = ["Web Development", "Graphic Design", "Data Science", "Digital Marketing", "AutoCAD", "Advanced Excel", "Web Design"];

function showSuggestions() {
    const input = document.getElementById('courseSearchInput').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestionsBox');
    suggestionsBox.innerHTML = ""; // Clear existing suggestions
    if (input) {
        const suggestions = courses.filter(course => course.toLowerCase().includes(input));
        suggestions.forEach(suggestion => {
            const suggestionItem = document.createElement("div");
            suggestionItem.className = "suggestion-item";
            suggestionItem.innerText = suggestion;
            suggestionItem.onclick = function () {
                document.getElementById('courseSearchInput').value = suggestion;
                suggestionsBox.innerHTML = ""; // Clear suggestions on selection
            };
            suggestionsBox.appendChild(suggestionItem);
        });
    }
}

function redirectToCoursesPage() {
    const searchInput = document.getElementById('courseSearchInput').value;

    if(!searchInput){
        alert('Please type something in the input box.');
    }
    if (searchInput) {
        window.location.href = `courses.html?search=${encodeURIComponent(searchInput)}`;
    }
    return false; // Prevent form submission
}