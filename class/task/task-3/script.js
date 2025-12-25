const userProfile = {
  id: 1,
  name: "Abhinav Sharma",
  email: "abhinav@example.com",
  skills: ["HTML", "CSS", "JavaScript"],
  isActive: true,

  getUserInfo() {
    return `ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Skills: ${this.skills.join(
      ", "
    )}, Active: ${this.isActive}`;
  },

  addSkill(skill) {
    this.skills.push(skill);
    return `${skill} added successfully.`;
  },

  deactivate() {
    this.isActive = false;
    return "User has been deactivated.";
  }
};

console.log(userProfile.getUserInfo());
console.log(userProfile.addSkill("React"));
console.log(userProfile.deactivate());
console.log(userProfile.getUserInfo());

class name {
  constructor(parameters) {
    
  }
}