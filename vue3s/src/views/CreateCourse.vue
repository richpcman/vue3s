<template>
    <div class="container">
      <h3>All Courses</h3>ww
      <div class="container">
        <form>
        <table>
          <tr>
          <td>
                <label htmlFor="id">id</label>
                <input v-model="course.id" type="text"/>

                <label htmlFor="desc">desc</label>
                <input v-model="course.description" type="text"  name="desc"/></td>

          </tr>

            
          <button  @click="handleSave()"
                    type="button" class="btn btn-outline-primary mt-3">
                    Save Course
            </button>
        </table>
      </form>
      </div>
    </div>
  </template>
  <script>
  import axios from 'axios';
  export default {
    data() {
      return {
        course: {
          id: '',
          description: ''
        }
      };
    },
    methods: {
      handleSave() {
        axios.post('http://localhost:8080/instructors/in28minutes/courses/', this.course)
      .then(() => {
        this.$router.push('/courseList/');
      });
      }
    }
  }
</script>