const students = [
  {
    name: "Ahmed",
    age: 17,
    grade: "A",
    subject: "Math",
    teacher: "Mr. Khaled",
    isPresent: true,
    absences: 1,
    score: 92,
  },
  {
    name: "Mahmoud",
    age: 18,
    grade: "B",
    subject: "Physics",
    teacher: "Ms. Salma",
    isPresent: true,
    absences: 2,
    score: 85,
  },
  {
    name: "Sara",
    age: 17,
    grade: "A+",
    subject: "English",
    teacher: "Mr. Tamer",
    isPresent: false,
    absences: 0,
    score: 98,
  },
  {
    name: "Omar",
    age: 16,
    grade: "C",
    subject: "History",
    teacher: "Mrs. Dina",
    isPresent: false,
    absences: 4,
    score: 67,
  },
  {
    name: "Nour",
    age: 17,
    grade: "B+",
    subject: "Biology",
    teacher: "Mr. Yasser",
    isPresent: true,
    absences: 1,
    score: 89,
  },
  {
    name: "Youssef",
    age: 18,
    grade: "A-",
    subject: "Chemistry",
    teacher: "Ms. Fatma",
    isPresent: true,
    absences: 0,
    score: 91,
  },
  {
    name: "Hala",
    age: 16,
    grade: "C+",
    subject: "Geography",
    teacher: "Mr. Ahmed",
    isPresent: false,
    absences: 3,
    score: 72,
  },
];
//   css ب html ربط id
const parent = document.getElementById("products");
const one = document.getElementById("first");
// حساب الحضور و الغياب
let i = 0;
//        متغير لحساب عدد الغائبين   
let Number_Absentees = 0;
// متغير لحساب عدد المتفوقين
let Number_Outstanding = 0;

while (i < students.length) {
  if (!students[i].isPresent) {
    Number_Absentees++;
  }
  if (students[i].score >= 90) {
    Number_Outstanding++;
  }
  i++;
}

one.innerHTML += `
<div class="total">
    <h1 class="list" data-aos="zoom-in">قائمة الطلاب 📚</h1>
  <div class="parts"> 
  <h1 class="Absentees"  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="1500">الغائبين:${Number_Absentees}</h1>
   <h1 class="Outstanding"data-aos="fade-left" data-aos-offset="300" data-aos-easing="ease-in-sine"  data-aos-duration="1500">المتفوقين:${Number_Outstanding}</h1>
  </div>
    </div>`;


//   لعرض بيانات كل طالب for of استخدام 
for (const student of students) {
    
  let result = "";
// لو الطالب حاضر ودرجته ≥  90
  if (student.isPresent && student.score >= 90) {
    result = "Excellent Student🏅";
  }
//   لو الطالب غايب أكتر من 3 مرات أو درجته أقل من 50 
   else if (student.absences > 3 || student.score < 50) {
    result = "Needs Tracking⚠️";
  } else {
    result = "New Student🆕";
  }

//       switch case حساب التقدير ب 
  let classification = "";
  //  لتغير لون الخلفيه css  متغير اقدر امسكه فى 
  let back_ground = "";

  switch (student.grade) {
    case "A+":
      classification = "🎉ممتاز جدا جدا";
      back_ground = "blue";
      break;

    case "A":
      classification = "🥇ممتاز";
      back_ground = "gray";
      break;

    case "A-":
      classification = "🥈جيد جيدا";
      back_ground = "green";
      break;

    case "B+":
      classification = "👍جيد";
      back_ground = "bisque";
      break;

    case "B":
      classification = "🙂مقبول";
      back_ground = "yellow";
      break;

    case "C+":
      classification = "⚠️تحت المتوسط";
      back_ground = "purple";
      break;

    case "C":
      classification = "❌ضعيف";
      back_ground = "orange";
      break;

    default:
      classification = "📚غير مصنف";
      back_ground = "red";
  }

  parent.innerHTML += `
    <div class="product">
   <div class="product-content" data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" data-aos-offset="100" data-aos-easing="ease-in-sine"  data-aos-duration="1500">
        <h1 class="name">${student.name}</h1>
        <hr>
        <h1 class="one">Age:<span> ${student.age}</span></h1>
        <h1 class="one">Grade:<span>${student.grade}</span></h1>
        <h1 class="one">Subject:<span>${student.subject}</span></h1>
        <h1 class="one">Teacher:<span>${student.teacher}</span></h1>
        <h1 class="one">Present:<span>${student.isPresent}</span></h1>
 <h1 class="one">Absences:<span>${student.absences}</span></h1>
  <h1 class="one">Result:<span>${student.score}</span></h1>
   <h1 class="result">${result}</h1>
    <h1 class="classeification ${back_ground}">${classification}</h1>
     </div>
    </div>
   

        `;
}
