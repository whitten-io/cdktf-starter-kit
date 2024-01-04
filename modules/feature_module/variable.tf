variable "create" {
    description = "Whether to create this resource or not?"
    type = bool
    default = true
}

variable "owner" {
    description = "The Owner of the resource."
    type = string
}

variable "environment" {
    description = "The Environment of the resource."
    type = string
}

variable "project" {
    description = "The Project of the resource."
    type = string
}

variable "name" {
    description = "Simple name of the resource. Don't use special characters. Dont use multiple '-' characters in a row."
    type = string
}
