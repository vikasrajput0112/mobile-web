pipeline {
  agent any

  environment {
    IMAGE_REPO = "ghcr.io/vikasrajput0112/mobile-web"
    IMAGE_TAG  = "${GIT_COMMIT}"
    IMAGE      = "${IMAGE_REPO}:${IMAGE_TAG}"

    COSIGN_EXPERIMENTAL = "1"
    KEEP_IMAGES = "5"
  }

  triggers {
    githubPush()
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

    stage('Trivy Scan') {
      steps {
        sh '''
          trivy image $IMAGE \
            --severity HIGH,CRITICAL \
            --exit-code 0 \
            --format table
        '''
      }
    }

    stage('Push Image to GHCR') {
      steps {
        withCredentials([
          string(credentialsId: 'github-jenkins', variable: 'TOKEN')
        ]) {
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
          env.IMAGE_DIGEST = sh(
            script: "docker inspect $IMAGE --format='{{index .RepoDigests 0}}'",
            returnStdout: true
          ).trim()
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

    stage('Update GitOps Repo') {
      steps {
        withCredentials([
          string(credentialsId: 'github-jenkins', variable: 'TOKEN')
        ]) {
          sh '''
            rm -rf gitops
            git clone https://$TOKEN@github.com/vikasrajput0112/mobile-web-gitops.git gitops
            cd gitops

            sed -i "s|image: .*|image: $IMAGE|g" deployment.yaml

            git config user.name "jenkins"
            git config user.email "jenkins@ci"
            git add deployment.yaml
            git commit -m "Deploy mobile-web $IMAGE_TAG"
            git push origin main
          '''
        }
      }
    }
  }

  post {
    success {
      echo "✅ Image built, signed & deployed automatically"
      echo "📦 $IMAGE"
    }
  }
}
