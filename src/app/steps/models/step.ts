import { StepText } from "./stepText";

export interface Step {
  title: string;
  class?: string;
  titleStep: StepText[];
  subtitle: StepText[];
}
