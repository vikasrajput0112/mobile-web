pipeline {
  agent any

    environment {
  IMAGE = "ghcr.io/vikasrajput0112/mobile-web:${BUILD_NUMBER}"
}

  

  stages {
    stage('Checkout') { steps { checkout scm } }
    stage('Build') { steps { sh 'npm install && npm run build' } }
    stage('Docker') { steps { sh 'docker build -t $IMAGE .' } }
    stage('Push') {
      steps {
        withCredentials([string(credentialsId: 'github-jenkins', variable: 'TOKEN')]) {
          sh 'echo $TOKEN | docker login ghcr.io -u USER --password-stdin'
          sh 'docker push $IMAGE'
        }
      }
    }
  }
}
