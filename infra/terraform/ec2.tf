# Creaate ssh key pair

resource "aws_key_pair" "dev_key" {
  key_name   = var.ssh_key_name
  public_key = file(var.public_key_path)
}

# Create Secuity group 

resource "aws_security_group" "mern-sg" {
  name_prefix = "mern-sg"
  description = "Allow SSH, HTTP, and backend ports"

  #Allow SSH

  ingress {
    description = "SSH"
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ## Frpntend SSH

  ingress {
    description = "Frontend (HTTP)"
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  #Backend API

  ingress {
    description = " Backend port"
    from_port   = 5000
    to_port     = 5000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  #vite dev port

  ingress {
    description = "Vite Dev"
    from_port   = 5173
    to_port     = 5173
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  #Allow all outbound traffic

    egress {
        from_port = 0
        to_port = 0
        protocol    = "-1"
        cidr_blocks = ["0.0.0.0/0"]
    }
    
  tags = {
    Name = "mern-security-group"
  }

}

# 🔹 Create EC2 Instance

resource "aws_instance" "mern_ec2" {
    ami = var.ami_id
    instance_type = var.instance_type
    key_name = aws.key_pair.dev_key.key_name
    vpc_security_group_ids = [aws_security_group.mern_sg.id]

  tags = {
    Name = "mern-devops-server"
  }
}

# 🔸 Write EC2 IP into Ansible inventory


