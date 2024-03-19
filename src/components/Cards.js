import React from 'react'
import Card from './Card'
import { toast } from 'react-toastify';

const Cards = (props) => {
    const courses = props.coursesData;
 
    if(!courses){
        return (
            <div className='not-found-data'>No courses data available.</div>
        );
    }

    let isLikedArr = [];
    let allCourses = [];
    const getCourses = () => {
        if (props.category !== "All") {
            return courses[props.category];
        }
        Object.values(courses).forEach((courseCategory) => {
            courseCategory.forEach((course) => {
                allCourses.push(course);
                isLikedArr.push(false);
            });
        });
        toast.success("Loaded Course Data");
        return allCourses;
    }
    
    
  return (
    <div className='cards-container'>
        {
            getCourses().map((course, index) => {
                return (
                    <Card key={course.id} {...course} index={index} isLikedArr={isLikedArr}/>
                )
            })
        }
    </div>
  )
}

export default Cards;