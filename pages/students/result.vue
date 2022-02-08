<template>
  <v-row justify="center" class="my-16">
    <v-col cols="11" md="10" class="accent--text text-center">
      <v-row>
        <v-col cols="6">
          <div class="d-flex align-center ml-5">
            <v-img
              alt="logo"
              class="shrink mr-2"
              contain
              :src="require('../../assets/img/logo.png')"
              width="100"
            />
            <h1>COLLEGE</h1>
        </div>
        </v-col>
        <v-col cols="6">
          <p>PARTNER NAME AND LOGO</p>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" md="10" class="accent--text text-center">
      <h3>Second Term Result</h3>
    </v-col>
    <v-col cols="11" md="10" class="accent--text text-cente">
      <v-row>
        <v-col cols="8">
          <v-list-item class="font-weight-bold">
            <v-list-item-content>
              <v-list-item-title>Name: Perry Morgan</v-list-item-title>
              <v-list-item-title>Admission: xxxxxx</v-list-item-title>
              <v-list-item-title>Class: SS3</v-list-item-title>
              <v-list-item-title>Term: Second Term</v-list-item-title>
              <v-list-item-title>Session: 2022/2023</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="4">
          <v-img
            src="https://res.cloudinary.com/reinforcedai/image/upload/v1644187944/pexels-pavel-danilyuk-7943987_hh9e9e.jpg"
            width="200"
            height="200"
            class="mx-auto"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" md="10" class="accent--text">
      <DataTable :headers="subjectHeaders" :desserts="subjectDesserts" :dense="dense" />
    </v-col>
    <v-col cols="11" md="10" class="accent--text">
      <v-row>
        <v-col cols="4">
          <h4 class="text-center pb-1">Performance</h4>
          <DataTable :headers="performanceHeaders" :desserts="performanceDesserts" :header="header" />
        </v-col>
        <v-col cols="4">
          <h4 class="text-center pb-5">Comments</h4>
          <DataTable :headers="commentHeaders" :desserts="commentDesserts" />
        </v-col>
        <v-col cols="4">
          <h4 class="text-center pb-5">Grading System</h4>
          <v-card tile outlined>
            <DataTable :headers="gradeHeaders" :desserts="gradeDesserts" />
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="11" md="10" class="text-center mt-16">
      <v-row justify="center">
        <v-col cols="6">
          <div class="d-flex align-center">
            <i>Name</i>
            <v-spacer></v-spacer>
            <i>Signature Stamp</i>
          </div>
          <v-divider></v-divider>
          <p>Principal</p>
        </v-col>
      </v-row>
    </v-col>

      <v-col cols="12" class="text-center">
        <v-card-text class="--text">
          &copy; {{ new Date().getFullYear() }} - COLLEGE | All Right Reserved
        </v-card-text>
        <p>www.college.edu.ng</p>
      </v-col>

    <SocialHead :title="title" :description="description" :image="image" />
  </v-row>
</template>

<script>
  export default {
    layout: 'students',
    // middleware: 'auth',
    data () {
      return {
        title: 'Result',
        description: '',
        image: '',
        header: true,
        dense: false,
        subjectHeaders: [
          {
            text: 'Subject',
            align: 'start',
            value: 'name',
          },
          { text: 'CA (40%)', value: 'ca' },
          { text: 'Exam (60%)', value: 'exam' },
          { text: 'Total (100%)', value: 'total' },
          { text: 'Grade', value: 'grade' },
          { text: 'Position In Class', value: 'position' },
          { text: 'Class Highest Score', value: 'highest' },
          { text: 'Class Lowest Score', value: 'lowest' },
          { text: 'Remark', value: 'remark' },
        ],
        subjectDesserts: [
          {
            name: 'Mathematics',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
          {
            name: 'English',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            average: 44.75,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
          {
            name: 'Economics',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            average: 44.75,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
          {
            name: 'Computer',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            average: 44.75,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
          {
            name: 'Agriculture',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            average: 44.75,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
          {
            name: 'Physics',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            average: 44.75,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
          {
            name: 'Chemistry',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            average: 44.75,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
          {
            name: 'Biology',
            ca: 40.5,
            exam: 49.0,
            total: 89.5,
            average: 44.75,
            remark: 'Excellent',
            grade: 'A',
            position: '1st',
            highest: 89.5,
            lowest: 57.5,
          },
        ],
        gradeHeaders: [
          { text: 'Grade', value: 'grade' },
          { text: 'Score', value: 'score' },
        ],
        
        gradeDesserts: [
          {
            grade: 'A',
            score: '70 - 100',
          },
          {
            grade: 'B',
            score: '60 - 69',
          },
          {
            grade: 'C',
            score: '50 - 59',
          },
          {
            grade: 'D',
            score: '40 - 49',
          },
          {
            grade: 'E',
            score: '30 - 39',
          },
          {
            grade: 'F',
            score: '0 - 29',
          },
        ],
        commentHeaders: [
          { text: 'Designation', value: 'designation' },
          { text: 'Name', value: 'name' },
          { text: 'Comment', value: 'comment' },
          { text: 'Signature', value: 'signature' },
        ],
        
        commentDesserts: [
          {
            designation: 'Principle',
            name: '',
            Comment: '',
            Signature: '',
          },
          {
            designation: 'Teacher',
            name: '',
            Comment: '',
            Signature: '',
          },
          {
            designation: 'Hostel Master/Mistress',
            name: '',
            Comment: '',
            Signature: '',
          },
          {
            designation: 'Guardian/Counsellor',
            name: '',
            Comment: '',
            Signature: '',
          },
        ],

        performanceHeaders: [
          { text: 'Item', value: 'item' },
          { text: 'Value', value: 'value' },
        ],
        performanceDesserts: [
          {
            item: 'Total Score',
            value: '90',
          },
          {
            item: 'Position in class',
            value: '1st',
          },
          {
            item: 'Attendance (%)',
            value: '',
          },
          {
            item: 'Number of times school opened',
            value: '90',
          },
          {
            item: 'Number of times present in school',
            value: '55',
          },
         {
           item: 'Number Of Students In Class',
           value: '75'
          },
        ],
      }
    },
  }
</script>