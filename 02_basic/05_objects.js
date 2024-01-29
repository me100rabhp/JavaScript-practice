const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "saurabh"
}

// course.courseInstructor

const {courseInstructor} = course;
//to make the neat, we use the above syntax in {in it choose what value}= here(from where the value is taken)
//this process is known as DE-STRUCTURE
const {courseInstructor:instructor} = course;
//when you want to change the name use : then write the new name
console.log(courseInstructor);


