import { Injectable } from "@angular/core";

import { Step } from "../models/step";

const steps: Step[] = [
  {
    title: "STEP 1",
    class: "color-blue",

    titleStep: [
      { text: "What are you" },
      { text: "GOOD", class: "color-orange" },
      { text: "at?" }
    ],
    subtitle: [
      {
        text: "List your skills and strengths here:",
        class: "color-green-light"
      }
    ]
  },
  {
    title: "STEP 2",
    class: "color-blue-marine",

    titleStep: [
      { text: "What do you" },
      { text: "LOVE", class: "color-purple" },
      { text: "?" }
    ],
    subtitle: [
      {
        text: "List here your interests:",
        class: "color-orange"
      }
    ]
  },
  {
    title: "STEP 3",
    class: "color-green-light",

    titleStep: [
      { text: "Finding your" },
      { text: "PASSION", class: "color-red" }
    ],
    subtitle: [
      {
        text:
          "Look through step 1 and 2 for overlapping areas to find your passion:",
        class: "color-violet"
      }
    ]
  },
  {
    title: "STEP 4",
    class: "color-blue",

    titleStep: [
      { text: "What do you" },
      { text: "CARE", class: "color-orange" },
      { text: "for in the world?" }
    ],
    subtitle: [
      {
        text: "Think of challenges in your community that matter to you:",
        class: "color-green-light"
      }
    ]
  },
  {
    title: "STEP 5",
    class: "color-green-light",

    titleStep: [
      { text: "Finding your" },
      { text: "MISSION", class: "color-blue" }
    ],
    subtitle: [
      {
        text:
          "Look through step 2 and 4 for overlapping areas to find your mission:",
        class: "color-green"
      }
    ]
  },
  {
    title: "STEP 6",
    class: "color-blue",

    titleStep: [
      { text: "What do you get" },
      { text: "RECOGNITION", class: "color-purple" },
      { text: "for?" }
    ],
    subtitle: [
      {
        text: "List your skills and strengths here:",
        class: "color-blue-marine"
      }
    ]
  },
  {
    title: "STEP 7",
    class: "color-purple",

    titleStep: [{ text: "Your" }, { text: "VOCATION", class: "color-blue" }],
    subtitle: [
      {
        text:
          "Look through step 4 and 6 for overlapping areas to find your vocation:",
        class: "color-orange"
      }
    ]
  },
  {
    title: "STEP 8",
    class: "color-blue-marine",

    titleStep: [
      { text: "Your" },
      { text: "PROFESSION", class: "color-orange" }
    ],
    subtitle: [
      {
        text:
          "Look through step 1 and 6 for overlapping areas to find your profession:",
        class: "color-blue"
      }
    ]
  },
  {
    title: "STEP 9",
    class: "color-blue",

    titleStep: [{ text: "Your" }, { text: "IKIGAI!", class: "color-orange" }],
    subtitle: [
      {
        text:
          "Your true prupose most be somewere arround these 4 overlapping areas:",
        class: "color-blue"
      }
    ]
  }
];

@Injectable()
export class StepsService {
  constructor() {}

  getSteps(): Step[] {
    return steps;
  }

  getStep(id: number): Step {
    return steps[id - 1];
  }
}
