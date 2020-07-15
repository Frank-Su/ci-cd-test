pipeline{
    agent any
    parameters {
        string(name:'version',defaultValue:'1.0.0',description:'build version')
    }

    stages {
        stage('Install Packages') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
    }
}