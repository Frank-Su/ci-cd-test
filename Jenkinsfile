pipeline{
   agent any
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
                sh 'npm run start'
            }
        }
    }
}
