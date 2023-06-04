<script>
import CourseTable from "../components/CourseTable.vue"

export default {
  components: {
    CourseTable
  },
  data() {
    return {
      courseInfo: {},
      body:null
    }
  },
  methods:{
    selectCourse(){
      fetch("http://localhost:8080/select_course", {
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
      this.body = params;
      this.selectCourse();
    }
  },
  mounted() {
    fetch("http://localhost:8080/find_all")
        .then(function (response) {
          return response.json();
        })
        .then(data => {
          console.log(data.courseList);
          this.courseInfo = data.courseList;
          console.log(this.courseInfo)
        });
  }
}
</script>

<template>
  <div class="course-area">
    <h1>選課系統</h1>
    <CourseTable :courseInfo="courseInfo" @callOutside="getSelectCourse"/>
  </div>
</template>

<style scoped lang="scss">
.course-area {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: .5rem 0 0 0;
  }
}
</style>