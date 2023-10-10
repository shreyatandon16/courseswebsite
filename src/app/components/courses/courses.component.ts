import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {


  courses: any;

  constructor(){
    this.courses = [
      {courseName: 'Python Course', courseImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F110%2F1108591.jpg&f=1&nofb=1&ipt=2615c263ad811b160000c98c1fcd13e8dc5b0ea94803b4544b516594e54e0924&ipo=images'},
      {courseName: 'Python Course', courseImage: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages3.alphacoders.com%2F110%2F1108591.jpg&f=1&nofb=1&ipt=2615c263ad811b160000c98c1fcd13e8dc5b0ea94803b4544b516594e54e0924&ipo=images'},
      {courseName: 'Python Course', courseImage: 'courseImageUrl'},
      {courseName: 'Python Course', courseImage: 'courseImageUrl'},
      {courseName: 'Python Course', courseImage: 'courseImageUrl'},
    ]
  }
}
