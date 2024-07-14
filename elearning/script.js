document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.button');
    const enrolledCoursesContainer = document.getElementById('enrolled-courses');
    
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const course = button.parentElement.getAttribute('data-course');
            let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];
            if (!enrolledCourses.includes(course)) {
                enrolledCourses.push(course);
                localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
                alert(`You have successfully enrolled in ${course}!`);
            } else {
                alert(`You are already enrolled in ${course}.`);
            }
        });
    });

    if (enrolledCoursesContainer) {
        let enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses')) || [];

        if (enrolledCourses.length === 0) {
            enrolledCoursesContainer.innerHTML = '<p>You have not enrolled in any courses yet.</p>';
        } else {
            enrolledCourses.forEach(course => {
                const courseDiv = document.createElement('div');
                courseDiv.classList.add('course');
                courseDiv.innerHTML = `<h2>${course}</h2>`;
                enrolledCoursesContainer.appendChild(courseDiv);
            });
        }
    }
});
