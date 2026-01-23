pipeline {
  agent any

  environment {
    IMAGE = "ghcr.io/vikasrajput0112/mobile-web:${BUILD_NUMBER}"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build App') {
      steps {
        sh '''
          npm install
          npm run build
        '''
      }
    }

    stage('Docker Build') {
      steps {
        sh '''
          docker build -t $IMAGE .
        '''
      }
    }

    stage('Trivy Image Scan (HTML Report)') {
      steps {
        sh '''
          echo "🔍 Running Trivy scan on $IMAGE"

          trivy image $IMAGE \
            --severity HIGH,CRITICAL \
            --format template \
            --template @/usr/local/share/trivy/templates/html.tpl \
            -o trivy-report.html \
            --exit-code 0
        '''
      }
    }

    stage('Push Image') {
      steps {
        withCredentials([string(credentialsId: 'github-jenkins', variable: 'TOKEN')]) {
          sh '''
            echo $TOKEN | docker login ghcr.io -u USER --password-stdin
            docker push $IMAGE
          '''
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'trivy-report.html', fingerprint: true
      echo "✅ Pipeline completed for image: $IMAGE"
      echo "📄 Trivy HTML report archived successfully"
    }
  }
}
