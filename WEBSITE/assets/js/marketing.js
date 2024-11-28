import { courses } from "../data/coursesData.js";


function renderGraphicDesignCourses() {
    const graphicDesignCourses = courses.filter(course => course.category === "digital-marketing");
    console.log(courses)

    const courseContainer = document.getElementById("marketing-related-courses-section");
    courseContainer.innerHTML = graphicDesignCourses.map(course => `
        <div class="col" style="margin-top: 1rem">
            <div class="item">
                <div class="cours-bx">
                    <div class="action-box">
                        <img src="../${course.image}" alt="${course.name}">
                        <a href="../Enroll.html" class="btn">Enroll Course</a>
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
}

renderGraphicDesignCourses();
