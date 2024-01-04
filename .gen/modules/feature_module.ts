// generated by cdktf get
// ./modules/feature_module
import { TerraformModule, TerraformModuleUserConfig } from 'cdktf';
import { Construct } from 'constructs';
export interface FeatureModuleConfig extends TerraformModuleUserConfig {
  /**
  * Whether to create this resource or not?
  * true
  */
  readonly create?: boolean;
  /**
  * The Environment of the resource.
  */
  readonly environment: string;
  /**
  * Simple name of the resource. Don't use special characters. Dont use multiple '-' characters in a row.
  */
  readonly name: string;
  /**
  * The Owner of the resource.
  */
  readonly owner: string;
  /**
  * The Project of the resource.
  */
  readonly project: string;
}
/**
* Defines an FeatureModule based on a Terraform module
*
* Source at ./modules/feature_module
*/
export class FeatureModule extends TerraformModule {
  private readonly inputs: { [name: string]: any } = { }
  public constructor(scope: Construct, id: string, config: FeatureModuleConfig) {
    super(scope, id, {
      ...config,
      source: './modules/feature_module',
    });
    this.create = config.create;
    this.environment = config.environment;
    this.name = config.name;
    this.owner = config.owner;
    this.project = config.project;
  }
  public get create(): boolean | undefined {
    return this.inputs['create'] as boolean | undefined;
  }
  public set create(value: boolean | undefined) {
    this.inputs['create'] = value;
  }
  public get environment(): string {
    return this.inputs['environment'] as string;
  }
  public set environment(value: string) {
    this.inputs['environment'] = value;
  }
  public get name(): string {
    return this.inputs['name'] as string;
  }
  public set name(value: string) {
    this.inputs['name'] = value;
  }
  public get owner(): string {
    return this.inputs['owner'] as string;
  }
  public set owner(value: string) {
    this.inputs['owner'] = value;
  }
  public get project(): string {
    return this.inputs['project'] as string;
  }
  public set project(value: string) {
    this.inputs['project'] = value;
  }
  public get enabledOutput() {
    return this.getString('enabled')
  }
  public get environmentOutput() {
    return this.getString('environment')
  }
  public get nameOutput() {
    return this.getString('name')
  }
  public get ownerOutput() {
    return this.getString('owner')
  }
  public get workloadNameOutput() {
    return this.getString('workload_name')
  }
  protected synthesizeAttributes() {
    return this.inputs;
  }
}
