pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/PriyansuMaurya/notco2.git'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh ' docker build -t priyansumaurya/notco2 .'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub', url: '']) {
                    sh 'docker push priyansumaurya/notco2'
                }
            }
        }
        stage('Deploy to AWS') {
            steps {
                sh 'ansible-playbook -i <EC2_PUBLIC_IP>, setup.yml --private-key <PATH_TO_PRIVATE_KEY> --user ubuntu'
            }
        }
    }
}
