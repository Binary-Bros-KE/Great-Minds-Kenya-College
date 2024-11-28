import { courses } from "../data/coursesData.js";

function populateCourseDropdown() {
    const courseSelect = document.getElementById('select-course-input');

    courses.forEach(course => {
        const option = document.createElement('option');
        option.value = course.name; // Set course name as value
        option.textContent = `${course.name} - Ksh. ${course.price.toLocaleString()}`; // Show name and price
        courseSelect.appendChild(option);
    });
}

populateCourseDropdown();
