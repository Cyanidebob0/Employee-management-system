const employee = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "e",
    password: "123",
    tasks: [
      {
        title: "Design Homepage",
        description: "Create wireframes and mockups for the homepage.",
        date: "2024-10-26",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Fix Navbar Issue",
        description: "Resolve the broken navigation links on the header.",
        date: "2024-10-27",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Test API Integration",
        description: "Ensure all endpoints are functioning correctly.",
        date: "2024-10-25",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Presentation",
        description: "Prepare slides for the monthly meeting.",
        date: "2024-10-29",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Feedback Review",
        description: "Analyze client feedback and provide solutions.",
        date: "2024-10-30",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Update Documentation",
        description: "Revise project documentation with the latest changes.",
        date: "2024-10-31",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
  },
  {
    id: 3,
    name: "Charlie Davis",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Set Up Deployment Pipeline",
        description: "Configure CI/CD for project deployment.",
        date: "2024-11-01",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Research New Tools",
        description: "Investigate alternatives for task management.",
        date: "2024-11-02",
        category: "Research",
        active: false,
        newTask: true,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
  },
  {
    id: 4,
    name: "Diana Evans",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Organize Team Event",
        description: "Plan an outing for the team.",
        date: "2024-10-28",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Audit System Logs",
        description: "Review logs for security anomalies.",
        date: "2024-11-03",
        category: "Security",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review pull requests from the development team.",
        date: "2024-10-26",
        category: "Development",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
  },
  {
    id: 5,
    name: "Ethan Green",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Migrate Database",
        description: "Move the database to a new server.",
        date: "2024-10-28",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        title: "Onboard New Employee",
        description: "Guide the new hire through the onboarding process.",
        date: "2024-10-27",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Update Marketing Strategy",
        description: "Revamp the campaign for next quarter.",
        date: "2024-11-01",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Bug #231",
        description: "Investigate and resolve reported bug in the system.",
        date: "2024-10-29",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
    taskNumbers: {
      active: 3,
      newTask: 2,
      completed: 1,
      failed: 0,
    },
  },
];

const admin = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLoclStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employee));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLoclStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees") || "[]");
  const admin = JSON.parse(localStorage.getItem("admin") || "[]");

  return { employees, admin };
};
