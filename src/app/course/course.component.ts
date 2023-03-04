import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courses = [
    {id:101,
      name: 'JavaScript for beginners',
      author: 'John Heikela',
      duration: '48',
      type: 'Free',
      price: 0.00,
      rating: 3.5,
      image : 'assets/courses/course-image1.png',
      description: 'In this course you will learn the fundamentals of JavaScript. This course is purely designed for beginners.' 
    },

    {id:102,
      name: 'Angular for beginners',
      author: 'John Heikela',
      duration: '28',
      type: 'Premium',
      price: 129.00,
      rating: 3.5,
      image : 'assets/courses/course-image2.png',
      description: 'In this course you will learn the fundamentals of Angular Framework. This course is purely designed for beginners.' 
    },

    {id:103,
      name: 'React for beginners',
      author: 'John Heikela',
      duration: '38',
      type: 'Free',
      price: 0.00,
      rating: 3.5,
      image : 'assets/courses/course-image3.png',
      description: 'In this course you will learn the fundamentals of React. This course is purely designed for beginners.' 
    },

    {id:104,
      name: 'Advanced Angular Course',
      author: 'John Heikela',
      duration: '19.5',
      type: 'Premium',
      price: 145.50,
      rating: 3.5,
      image : 'assets/courses/course-image4.png',
      description: 'In this course you will learn all the concepts of Angular from basics to advanced.' 
    },

    {id:105,
      name: 'Advanced JavaScript Course',
      author: 'John Heikela',
      duration: '60',
      type: 'Premium',
      price: 150.00,
      rating: 3.5,
      image : 'assets/courses/course-image5.jpg',
      description: 'In this course you will learn the complete modern JavaScript step by step.' 
    },

    {id:106,
      name: 'Angular with .Net Core',
      author: 'John Heikela',
      duration: '68',
      type: 'Premium',
      price: 129.00,
      rating: 3.5,
      image : 'assets/courses/course-image6.png',
      description: 'In this course you will learn the fundamentals of Angular Framework with .Net Core. This course is purely advanced level.' 
    },

    {id:107,
      name: 'Advanced React Course',
      author: 'John Heikela',
      duration: '18.5',
      type: 'Free',
      price: 0.00,
      rating: 4.0,
      image : 'assets/courses/course-image7.jpg',
      description: 'In this course you will learn the fundamentals and advanced concepts of React. This course is purely advanced level.' 
    },

    {id:108,
      name: 'UX Design Course',
      author: 'John Heikela',
      duration: '19',
      type: 'Premium',
      price: 115.15,
      rating: 4.8,
      image : 'assets/courses/course-image8.jpeg',
      description: 'In this course you will learn the fundamentals of UX Design. This course is purely designed for beginners.' 
    },

    {id:109,
      name: 'UX Design Course:Advanced',
      author: 'John Heikela',
      duration: '20',
      type: 'Premium',
      price: 115.50,
      rating: 4.8,
      image : 'assets/courses/course-image9.png',
      description: 'In this course you will learn the fundamentals of UX Design. This course is purely designed for Advanced.' 
    }
  ]

  getTotalCourses(){
    return this.courses.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(courses => courses.type === 'Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(courses => courses.type === 'Premium').length;
  }

  // Radio Button Property
  courseCountRadioButton:string = 'All';
  // Search Button Property
  searchText:string= '';

  onFilterRadioButtonChanged(data:string){
    this.courseCountRadioButton = data;
  }

  onSearchTextEntered(searchValue:string){
    this.searchText = searchValue;
    // console.log(this.searchText);
  }
}
