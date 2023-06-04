<script>
import CourseTable from "../components/CourseTable.vue"


export default {
  components: {
    CourseTable
  },
  data() {
    return {
      student_id: (JSON.parse(sessionStorage.getItem("obj"))).studentID,
      courseInfo: {},
      body: {
        course_code: "",
        student_id: ""
      }
    }
  },
  methods: {
    dropCourse() {
      fetch("http://localhost:8080/drop_course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.body)
      }).then(function (response) {
        return response.json();
      })
          .then(function (data) {
            alert(data.message)
          })
    },
    getSelectCourse(params) {
      this.body.course_code = params.course_code_list[0];
      this.body.student_id = params.student_id;
      this.dropCourse();
    }
  }
  ,
  mounted() {
    let body = {
      student_id: ""
    };
    body.student_id = this.student_id
    fetch("http://localhost:8080/get_selected_courses_by_student_id", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }).then(function (response) {
      return response.json();
    })
        .then(data => {
          this.courseInfo = data.courseList;
        })
  }
}

</script>

<template>
  <div class="drop-course-area">
    <h1>退選</h1>
    <CourseTable :courseInfo="courseInfo" @callOutside="getSelectCourse"/>
  </div>
</template>

<style scoped lang="scss">
.drop-course-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: .5rem 0 0 0;
  }
}
</style>