// Variable 
const coursesList = document.querySelector("#courses-list");
const shoppingCartContent = document.querySelector("#cart-content tbody");
const clearCart = document.querySelector("#clear-cart");

// Event Listeners
eventListenerLoader();

function eventListenerLoader(){
    // courses-list
    coursesList.addEventListener('click' , buyCourse);
    // when the remove btn is clicked
    shoppingCartContent.addEventListener('click' , removeCourse);
    // clear Cart list
    clearCart.addEventListener('click' , clearCartList) 
}

// Function
function buyCourse (evt){
    evt.preventDefault();

    if (evt.target.classList.contains('add-to-cart')) {
        // read the course value
        const course = evt.target.parentElement.parentElement;

        // read the value
        getCourseInfo(course);
    }

}
function getCourseInfo(course){
    const courseInfo = {
        title: course.querySelector('h4').textContent,
        img: course.querySelector('img').src,
        price: course.querySelector('.price span').textContent,
        id: course.querySelector('a').getAttribute('data-id')
    }
    // insert into shopping cart
    addToCart(courseInfo);

}
function addToCart(course){
    // create table row
    const row = document.createElement('tr');

    // build the tamplate

    row.innerHTML = `
        <tr>
            <td>
                <img src="${course.img}" width="100" />
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td>
                <a href="#" class="remove" data-id="${course.id}">X</a>
            </td>
        </tr>
    `;
    shoppingCartContent.appendChild(row);
    
    // addCartToLS
    addToStorage(course)
    
}
// addCartToLS
function addToStorage(courseInfo){
    let courses = getCoursesLocalStorage();

    courses.push(courseInfo)

    localStorage.setItem('course' , JSON.stringify(courses));
}
// get courses from LocalStorage
function getCoursesLocalStorage(){
    let courses;

    // if something exist on storage then we get the value, otherwise create an empty array
    if(localStorage.getItem('course') === null){
        courses= [];
    }else{
        courses = JSON.parse(localStorage.getItem('course'));
    }

    return courses;
}
function removeCourse(evt) {
    if(evt.target.classList.contains('remove')){
        evt.target.parentElement.parentElement.remove();
    }
}
function clearCartList(){
    // shoppingCartContent.innerHTML = '';

    while(shoppingCartContent.firstChild){
        shoppingCartContent.removeChild(shoppingCartContent.firstChild);
    }
}