<template>
  <div class="container">
    <h3>All Courses</h3>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" v-bind:key="course.id">
            <td>{{course.id}}</td>
            <td>{{course.description}}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
//import CourseDataService from '../service/CourseDataService.js';
import axios from 'axios';
export default {
name: "CoursesList",
data() {
  return {
    courses:[]
  }
},
methods: {
  refreshCourses() {
    //CourseDataService.retrieveAllCourses() 
    axios.get('http://localhost:8080/instructors/in28minutes/courses')
     .then(res => {
       this.courses = res.data;
      });
    }
  },

created() {
  this.refreshCourses();
}

};
</script>