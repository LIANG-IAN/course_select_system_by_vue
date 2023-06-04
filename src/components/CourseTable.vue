<script>
export default {
  props:["courseInfo"],
  data() {
    return {
      student_id: (JSON.parse(sessionStorage.getItem("obj"))).studentID,
      selectedCourses:[]
    }
  },
  methods: {
    toggleCheckbox(info) {
      info.checked = !info.checked;
      if (info.checked) {
        this.selectedCourses.push(info.courseCode);
      } else {
        const index = this.selectedCourses.indexOf(info.courseCode);
        if (index !== -1) {
          this.selectedCourses.splice(index, 1);
        }
      }
      console.log(this.selectedCourses);
    },
    selectCourse() {
      let body = {
        course_code_list: [],
        student_id: ""
      };
      body.course_code_list = this.selectedCourses;
      body.student_id = this.student_id
      this.$emit("callOutside",body)
    }
  }
}

</script>

<template>
  <div class="course-table">
    <h2>學生ID: {{ student_id }}</h2>
    <div class="table">
      <table>
        <tr>
          <th>課程代碼</th>
          <th>課程名稱</th>
          <th>上課星期</th>
          <th>上課時間</th>
          <th>下課時間</th>
          <th>學分</th>
          <th>選修人數</th>
          <th>加選</th>
        </tr>
        <tr v-for="(info, key) in courseInfo" :key="key" @click="toggleCheckbox(info)">
          <td>{{ info.courseCode }}</td>
          <td>{{ info.courseName }}</td>
          <td>{{ info.dayOfWeek }}</td>
          <td>{{ info.startTime }}</td>
          <td>{{ info.endTime }}</td>
          <td>{{ info.credits }}</td>
          <td>{{ info.enrollmentCount }}/3</td>
          <td><input type="checkbox" v-model="info.checked"></td>
        </tr>
      </table>
    </div>
    <button type="button" @click="selectCourse">送出</button>
  </div>
</template>

<style scoped lang="scss">
.course-table {
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 1rem 0 .5rem 0;
  }

  button {
    margin-top: .5rem;
  }

  .table {
    overflow: auto;
    height: 330px;

    table {
      width: 60vw;
      background-color: #d1fbf9;
      text-align: center;
      border-collapse: collapse;
      line-height: 1.5;
    }

    th, td {
      border: 1px solid black;
    }

    tr {
      background-color: #fff;

      &:hover {
        background-color: #a8a8a8;
      }
    }
  }
}
</style>