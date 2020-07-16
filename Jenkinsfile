pipeline{
   agent {
    docker {
      image "node:slim"
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
        stage('rebuild node-sass') {
            steps {
                sh 'npm rebuild node-sass'
            }
        }

        stage('Build Project') {
            steps {
                sh 'npm run build'
            }
        }
    }
}
