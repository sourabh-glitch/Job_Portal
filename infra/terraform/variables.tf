variable "region" {
    description = "Aws region for resource"
    default = "ap-south-1"
}

variable "ami_id" {
  description = "Ubuntu 22.04 AMI for ap-south-1"
  default     = "ami-0dee22c13ea7a9a67"
}

variable "instance_type" {
    description = "EC instance type"
    default = "t3.micro"
}

variable "ssh_key_name" {
    description = "key pair name"
    default = "devops-key"
}

variable "public_key_path" {
    description = "path to pulic key"
    default = "~/.ssh/id_rsa.pub"
}

variable "private_key_path" {
  description = "Path to your private key"
  default     = "~/.ssh/id_rsa"
}

