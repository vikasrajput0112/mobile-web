pipeline {
  agent any

  environment {
    IMAGE = "ghcr.io/vikasrajput0112/mobile-web:${BUILD_NUMBER}"
    COSIGN_EXPERIMENTAL = "1"
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

    stage('Get Image Digest') {
      steps {
        script {
          def IMAGE_DIGEST = sh(
            script: "docker inspect $IMAGE --format='{{index .RepoDigests 0}}'",
            returnStdout: true
          ).trim()

          env.IMAGE_DIGEST = IMAGE_DIGEST
          echo "🔐 Image Digest: ${IMAGE_DIGEST}"
        }
      }
    }

    stage('Cosign Sign Image') {
      steps {
        withCredentials([
          file(credentialsId: 'cosign-key', variable: 'COSIGN_KEY'),
          string(credentialsId: 'cosign-password', variable: 'COSIGN_PASSWORD')
        ]) {
          sh '''
            export COSIGN_PASSWORD=$COSIGN_PASSWORD
            cosign sign --key $COSIGN_KEY $IMAGE_DIGEST
          '''
        }
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'trivy-report.html', fingerprint: true
      echo "✅ Pipeline completed successfully"
      echo "📦 Image: $IMAGE"
      echo "🔐 Signed Digest: $IMAGE_DIGEST"
    }
  }
}
