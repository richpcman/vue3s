<template>
  <div class="container">
    <h3>All Courses</h3>
    <div class="container">
      <table class="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="course in courses" v-bind:key="course.id">
            <td>{{course.id}}</td>
            <td>{{course.description}}</td>
            <td>
              <button v-on:click="updateCourseClicked(course.id)">edit</button>
              <!--
                <router-link :to="'/EditCourse/${course.id}'" class="btn btn-outline-success mx-1">Edit</router-link>
                -->
            </td>                 
            <td><button v-on:click="deleteCourse(course.id)">Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div><router-link to="/CreateCourse">Add Course</router-link> </div>
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
    axios.get('http://localhost:8080/instructors/in28minutes/courses')
     .then(res => {
       this.courses = res.data;
      });
    },
  
    deleteCourse(id){
    axios.delete('http://localhost:8080/instructors/in28minutes/courses/'+id)
    .then(()=>{
      this.refreshCourses();
    });
    },
    updateCourseClicked(id){
      this.$router.push('/EditCourse/'+id);
    }
},
created() {
  this.refreshCourses();
}  
};
</script>