pipeline{
   agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
     environment {
            HOME = '.'
        }
    
    stages {
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Project') {
            steps {
                sh 'sudo npm start'
            }
        }
    }
}