import { IBaseConfig } from "./base.interface";

export interface IWorkloadConfig extends IBaseConfig {
  /*
    * The name of the workload.
    **/
  name: string;
}
