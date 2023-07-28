<script>
import CourseTable from "../components/CourseTable.vue"

export default {
  components: {
    CourseTable
  },
  data() {
    return {
      courseInfo: {},
      body: null,
      search:""
    }
  },
  methods: {
    selectCourse() {
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
    },
    searchCourse(searchParams){
      if (searchParams.toUpperCase().match(/^[A-Z]/))
      {
        fetch("http://localhost:8080/find_course_by_course_code", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(searchParams)
      }).then(function (response) {
        return response.json();
      })
          .then(function (data) {

          })
      }
      else{
        fetch("http://localhost:8080/find_course_by_course_name", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(searchParams)
        }).then(function (response) {
          return response.json();
        })
            .then(function (data) {

            })
      }
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
    <input type="search" name="search" id="search" autocomplete="none" v-model="search">
    <button type="button" @click="searchCourse">搜尋</button>
    <CourseTable :courseInfo="courseInfo" @callOutside="getSelectCourse"/>
  </div>
</template>

<style scoped lang="scss">
.course-area {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: .5rem 0 0 0;
  }

  button{
    position: absolute;
    right: 130px;
    top: 50px;
  }

  input {
    position: absolute;
    right: 0;
    top: 50px;
    width: 120px;
  }
}
</style>