import { Construct } from "constructs";
import { App, LocalBackend, TerraformStack } from "cdktf";
import { IWorkloadConfig } from "./interfaces/workload.interface";
import { IEnvironmentConfig } from "./interfaces/environment.interface";

export class WorkloadStack extends TerraformStack {
  constructor(scope: Construct, id: string, environmentConfig: IEnvironmentConfig, config: IWorkloadConfig) {
    super(scope, id);
  }
}

const app = new App();
new WorkloadStack(app, "terraform",
  {
    name: "dev",
    is_multi_regional: false,
  },
  {
    environment: "dev",
    owner: "owner",
    project: "project",
    name: "workload",
    label: "dev",
    create: true
  });
app.synth();
