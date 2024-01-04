output "enabled" {
    description = "Whether the resource is enabled or not. Value of var.create."
    value = var.create
}

output "workload_name" {
    description = "value of var.name"
    value = "${var.owner}-${var.name}-${var.environment}"
}

output "owner" {
    value = var.owner
}

output "name" {
    value = var.name
}

output "environment" {
    value = var.environment
}