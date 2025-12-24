const users = [
  {
    id: 101,
    name: "  alex JOHNSON ",
    dob: "1992-06-15",
    salary: "55000",
    skills: ["html", "css", "javascript"]
  },
  {
    id: 102,
    name: "  maria  smith  ",
    dob: "1988-11-03",
    salary: "72000",
    skills: ["react", "node", "css"]
  },
  {
    id: 103,
    name: "john doe",
    dob: "1996-02-25",
    salary: "48000",
    skills: ["vue", "javascript", "html"]
  }
];

// task-1 trim spaces & convert to title case 

function toTitleCase(str){
    return str.trim().split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(" ");
}
const formattedNames = users.map(u => toTitleCase(u.name));
console.log("Task 1 Output:", formattedNames);

