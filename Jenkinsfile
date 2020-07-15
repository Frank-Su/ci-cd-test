pipeline{
    agent {
    docker {
      image "node:slim"
    }
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