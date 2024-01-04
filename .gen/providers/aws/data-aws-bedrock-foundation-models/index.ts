// https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAwsBedrockFoundationModelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models#by_customization_type DataAwsBedrockFoundationModels#by_customization_type}
  */
  readonly byCustomizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models#by_inference_type DataAwsBedrockFoundationModels#by_inference_type}
  */
  readonly byInferenceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models#by_output_modality DataAwsBedrockFoundationModels#by_output_modality}
  */
  readonly byOutputModality?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models#by_provider DataAwsBedrockFoundationModels#by_provider}
  */
  readonly byProvider?: string;
  /**
  * model_summaries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models#model_summaries DataAwsBedrockFoundationModels#model_summaries}
  */
  readonly modelSummaries?: DataAwsBedrockFoundationModelsModelSummaries[] | cdktf.IResolvable;
}
export interface DataAwsBedrockFoundationModelsModelSummaries {
}

export function dataAwsBedrockFoundationModelsModelSummariesToTerraform(struct?: DataAwsBedrockFoundationModelsModelSummaries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataAwsBedrockFoundationModelsModelSummariesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAwsBedrockFoundationModelsModelSummaries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAwsBedrockFoundationModelsModelSummaries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // customizations_supported - computed: true, optional: false, required: false
  public get customizationsSupported() {
    return cdktf.Fn.tolist(this.getListAttribute('customizations_supported'));
  }

  // inference_types_supported - computed: true, optional: false, required: false
  public get inferenceTypesSupported() {
    return cdktf.Fn.tolist(this.getListAttribute('inference_types_supported'));
  }

  // input_modalities - computed: true, optional: false, required: false
  public get inputModalities() {
    return cdktf.Fn.tolist(this.getListAttribute('input_modalities'));
  }

  // model_arn - computed: true, optional: false, required: false
  public get modelArn() {
    return this.getStringAttribute('model_arn');
  }

  // model_id - computed: true, optional: false, required: false
  public get modelId() {
    return this.getStringAttribute('model_id');
  }

  // model_name - computed: true, optional: false, required: false
  public get modelName() {
    return this.getStringAttribute('model_name');
  }

  // output_modalities - computed: true, optional: false, required: false
  public get outputModalities() {
    return cdktf.Fn.tolist(this.getListAttribute('output_modalities'));
  }

  // provider_name - computed: true, optional: false, required: false
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }

  // response_streaming_supported - computed: true, optional: false, required: false
  public get responseStreamingSupported() {
    return this.getBooleanAttribute('response_streaming_supported');
  }
}

export class DataAwsBedrockFoundationModelsModelSummariesList extends cdktf.ComplexList {
  public internalValue? : DataAwsBedrockFoundationModelsModelSummaries[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAwsBedrockFoundationModelsModelSummariesOutputReference {
    return new DataAwsBedrockFoundationModelsModelSummariesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models aws_bedrock_foundation_models}
*/
export class DataAwsBedrockFoundationModels extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aws_bedrock_foundation_models";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/aws/5.25.0/docs/data-sources/bedrock_foundation_models aws_bedrock_foundation_models} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAwsBedrockFoundationModelsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAwsBedrockFoundationModelsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aws_bedrock_foundation_models',
      terraformGeneratorMetadata: {
        providerName: 'aws',
        providerVersion: '5.25.0',
        providerVersionConstraint: '5.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._byCustomizationType = config.byCustomizationType;
    this._byInferenceType = config.byInferenceType;
    this._byOutputModality = config.byOutputModality;
    this._byProvider = config.byProvider;
    this._modelSummaries.internalValue = config.modelSummaries;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // by_customization_type - computed: false, optional: true, required: false
  private _byCustomizationType?: string; 
  public get byCustomizationType() {
    return this.getStringAttribute('by_customization_type');
  }
  public set byCustomizationType(value: string) {
    this._byCustomizationType = value;
  }
  public resetByCustomizationType() {
    this._byCustomizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byCustomizationTypeInput() {
    return this._byCustomizationType;
  }

  // by_inference_type - computed: false, optional: true, required: false
  private _byInferenceType?: string; 
  public get byInferenceType() {
    return this.getStringAttribute('by_inference_type');
  }
  public set byInferenceType(value: string) {
    this._byInferenceType = value;
  }
  public resetByInferenceType() {
    this._byInferenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byInferenceTypeInput() {
    return this._byInferenceType;
  }

  // by_output_modality - computed: false, optional: true, required: false
  private _byOutputModality?: string; 
  public get byOutputModality() {
    return this.getStringAttribute('by_output_modality');
  }
  public set byOutputModality(value: string) {
    this._byOutputModality = value;
  }
  public resetByOutputModality() {
    this._byOutputModality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byOutputModalityInput() {
    return this._byOutputModality;
  }

  // by_provider - computed: false, optional: true, required: false
  private _byProvider?: string; 
  public get byProvider() {
    return this.getStringAttribute('by_provider');
  }
  public set byProvider(value: string) {
    this._byProvider = value;
  }
  public resetByProvider() {
    this._byProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byProviderInput() {
    return this._byProvider;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // model_summaries - computed: false, optional: true, required: false
  private _modelSummaries = new DataAwsBedrockFoundationModelsModelSummariesList(this, "model_summaries", false);
  public get modelSummaries() {
    return this._modelSummaries;
  }
  public putModelSummaries(value: DataAwsBedrockFoundationModelsModelSummaries[] | cdktf.IResolvable) {
    this._modelSummaries.internalValue = value;
  }
  public resetModelSummaries() {
    this._modelSummaries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSummariesInput() {
    return this._modelSummaries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      by_customization_type: cdktf.stringToTerraform(this._byCustomizationType),
      by_inference_type: cdktf.stringToTerraform(this._byInferenceType),
      by_output_modality: cdktf.stringToTerraform(this._byOutputModality),
      by_provider: cdktf.stringToTerraform(this._byProvider),
      model_summaries: cdktf.listMapper(dataAwsBedrockFoundationModelsModelSummariesToTerraform, true)(this._modelSummaries.internalValue),
    };
  }
}
