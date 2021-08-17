import mongoose from "mongoose";

const planningAppSchema = mongoose.Schema([
  {
    id: String,
    title: String,
    deadline: String,
    startTime: String,
    category: String,
    owners: [String],
    body: String,
    users: [String],
    stages: [
      {
        id: String,
        title: String,
        v: String,
        deadline: String,
        body: String,
        tasks: [
          {
            id: String,
            title: String,
            v: String,
            deadline: String,
            subtasks: [
              {
                id: String,
                title: String,
                assignedTo: [String],
                timeRemaining: Number,
                resolved: Boolean,
              },
            ],
          },
        ],
      },
    ],
  },
]);

const PlanningApp = mongoose.model("PlanningApp", planningAppSchema, "PlanningApp");

export default PlanningApp;
