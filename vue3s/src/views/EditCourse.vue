<template>
    <form>
    
        <table>
            <tr>
                <td>
                    <label>ID</label>
                    <input type="text" v-model="course.id"/>
                </td>
                <td>
                    <label>Desciption</label>
                    <input type="text" v-model="course.description"/>
                </td>
            </tr>
                    
                    <button @click="update()">
                        Save Project
                    </button>   
    
        </table> 
    </form>
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
        created() {
            const id = this.$route.params.id;
            axios.get('http://localhost:8080/instructors/in28minutes/courses/'+id)
            .then(response => {
                let courseInfo = response.data;
                this.course.id = courseInfo.id;
                this.course.description = courseInfo.description;
                return response;
            });
        },
        methods: {
          update() {            
           axios.put('http://localhost:8080/instructors/in28minutes/courses/'
           + this.course.id,this.course);
           
           this.$router.push("/CourseList");
          }

        }
    }
    </script>
    
    