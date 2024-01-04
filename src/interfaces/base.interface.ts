export interface IBaseConfig {
      /*
   * The name of the environment.
   **/
  label: string;
  /*
   * flag to create resources or not.
   **/
  create: boolean;
  /*
   * The name of the environment this is being deployed to.
   **/
  environment: string;
  /*
   * The name of the workload.
   **/
  owner: string; // github owner
  /*
   * The name of the project associated with the workload.
   **/
  project: string; // workload is part of a project
}