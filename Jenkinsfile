pipeline{

    agent any

    environment{
        IMAGE_NAME = "my-fe-app"
        CONTANER_NAME = "My-frontend-conainer-1"
    }


    stages{

        stage ('checkout the code'){
            steps{
                echo "Checkouting the code .."
                checkout scm
            }
        }

        stage ('Turn off old container'){
            steps{
                echo "Stopping the old containers ..."
                sh 'docker container stop ${CONTAINER_NAME} || true'
                echo "Old containers are stopped !"
            }
        }

        stage ('Removing old images'){
            steps{
                echo "Removing the old images ..."
                sh 'docker image rm ${IMAGE_NAME} || true'
                echo "Old images are removed !"
            }
        }

        stage ('Removing old containers'){
            steps{
                echo "Removing old containers"
                sh 'docker container rm ${CONTAINER_NAME}'
                echo "Old containers removed"
            }
        }

        stage ('Creating the new image and deploy our app using docker compose'){
            steps{
                echo "Staring the Application ..."
                sh 'docker compose up -d'
                echo "Application started !"
            }
        }
    }

}