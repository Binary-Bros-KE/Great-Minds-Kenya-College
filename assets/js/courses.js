import { courses } from "../data/coursesData.js";
console.log("Courses data:", courses);

let currentPage = Number(localStorage.getItem("currentPage")) || 1; // Retrieve currentPage from localStorage or default to 1
const itemsPerPage = 9;

function renderCourses() {
    const searchQuery = document.getElementById("course-search-input").value.toLowerCase();
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    const filteredCourses = courses.filter(course =>
        course.name.toLowerCase().includes(searchQuery)
    );

    const paginatedCourses = filteredCourses.slice(startIdx, endIdx);

    const courseContainer = document.getElementById("course-list");
    courseContainer.innerHTML = paginatedCourses.map(course => `
            <div class="col-md-6 col-lg-4 col-sm-6 m-b30">
                <div class="item">
                    <div class="cours-bx">
                        <div class="action-box">
                            <img src="${course.image}" alt="">
                            <a href="#" class="btn">More info</a>
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
            </div>
        `).join("");

    renderPagination(filteredCourses.length);
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById("pagination");

    paginationContainer.innerHTML = `
        <button onclick="goToPage(currentPage - 1)" ${currentPage === 1 ? "disabled" : ""}>Back</button>
        ${Array.from({ length: totalPages }, (_, i) => `
            <button onclick="goToPage(${i + 1})" class="${currentPage === i + 1 ? 'active' : ''}">${i + 1}</button>
        `).join("")}
        <button onclick="goToPage(currentPage + 1)" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
    `;
}

function goToPage(page) {
    const totalPages = Math.ceil(courses.length / itemsPerPage);

    // Ensure 'page' is within valid bounds
    if (page < 1) {
        currentPage = 1;
    } else if (page > totalPages) {
        currentPage = totalPages;
    } else {
        currentPage = page;
    }

    localStorage.setItem("currentPage", currentPage); // Save currentPage to localStorage
    renderCourses();
}

// Make goToPage globally accessible
window.goToPage = goToPage;

document.getElementById("course-search-input").addEventListener("input", () => {
    currentPage = 1;
    renderCourses();
});

renderCourses(); // Initial render
