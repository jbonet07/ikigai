import { StepsService } from "./steps.service";
import { StorageService } from "./storage.service";

export const services: any[] = [StepsService, StorageService];

export * from "./steps.service";
export * from "./storage.service";
