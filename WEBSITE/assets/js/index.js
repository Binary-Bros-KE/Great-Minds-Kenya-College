import { courses } from "../data/coursesData.js";

const availableCourses = courses.map(course => course.name);

function showSuggestions() {
    const input = document.getElementById('courseSearchInput').value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestionsBox');
    suggestionsBox.innerHTML = ""; // Clear existing suggestions
    if (input) {
        const suggestions = availableCourses.filter(course => course.toLowerCase().includes(input));
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




function renderGraphicDesignCourses() {
    const graphicDesignCourses = courses.filter(course => course.category === "popular");
    console.log(courses)

    const courseContainer = document.getElementById("hero-owl-carousel-container");
    courseContainer.innerHTML = graphicDesignCourses.map(course => `
            <div class="item">
                <div class="cours-bx">
                    <div class="action-box">
                        <img src="../${course.image}" alt="${course.name}">
                        <a href="../pages/${course.page}" class="btn">More Info</a>
                        <span>${Math.round((course.price - course.discountPrice) / course.price * 100)}% OFF</span>
                    </div>
                    <div class="info-bx popularr-courses-info">
                        <h5 style="text-align: left;"><a href="#">${course.name}</a></h5>
                        <div class="popular-courses-features">
                            <h6><span>Duration:</span><span>${course.duration}</span></h6>
                            <h6><span>Online Classes:</span><span>${course.online}</span></h6>
                            <h6><span>Certification:</span><span>${course.certification}</span></h6>
                        </div>
                    </div>
                    <div class="cours-more-info">
                        <div class="review">
                            <span>${course.reviews} Reviews</span>
                            <ul class="cours-star">${'<li class="active"><i class="fa fa-star"></i></li>'.repeat(course.rating)}</ul>
                        </div>
                        <div class="price">
                            <del>KES ${course.price.toLocaleString()}</del>
                            <h5>KES ${course.discountPrice.toLocaleString()}</h5>
                        </div>
                    </div>
                </div>
            </div>
    `).join("");
}

renderGraphicDesignCourses();
document.getElementById('courseSearchInput').addEventListener('input', showSuggestions);
