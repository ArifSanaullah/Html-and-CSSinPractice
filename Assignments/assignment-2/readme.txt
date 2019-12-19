Assignment-2 Solution Guidelines
Assignment Description:
	Code a html file.
	create Dockerfile in which you must use your html file.
	Build image from Dockerfile.
	Push image to docker hub.
	Create a Deployment/Replicaset with any desired replicas who's image should be the one you pushed to docker hub.
	Access the Deployment/Replicaset with service.
Solution:
Create a html file named index.html (you can give any name to your file but it's extension must be .htm or .html).
Create a Dockerfile and use your html file(index.html) in it. My Dockerfile is attached with the document. you can use this or can modify this according to your requirement.
Now open terminal and route your present working directory to that where your Dockerfile is placed. Here remember one thing that your Docker file and html file(index.html) must be in same directory for convenience.
After routing your terminal's pwd to Dockerfile run following command to build the image from your Dockerfile.

"docker image build -t <dockerhub-user-name/image-tag-name> ."

In previous command there some things to remember. Verify that you are in the directory where your Dockerfile is placed. Your image-tag-name will be the name of image you want to give to your image followed be your username of dockerhub. Mark the Dot "." placed in the last of command. This Dot tells the docker to get content of image from the same directory where Dockerfile is placed.
Once done you can check whether your image is build or not by following command

"docker images"

After running this command you will se the image in the following way

REPOSITORY                   		TAG                 IMAGE ID            CREATED             SIZE
<dockerhub-user-name/image-tag-name>   	latest              <image-id>	        <creation-time>	   <size-of-image>

Now push your image to your docker hub. For this run following command:

“docker push <dockerhub-user-name/image-tag-name>”

Before running previous command make sure that you are logged in to the docker hub. To do this run :

“docker login”

A user input prompt will appear. Input your docker hub username and then password.

To verify that is your image pushed to docker hub or not go to given link.

https://hub.docker.com/
Here you will see your latest pushed image with same <dockerhub-username/image-tag-name>

Terrifying looking part of our assignment is done. Now let’s move to deploymentation.
Now you have to create a deployment or replicaset with three replicas and set the container-image to the one you pushed to docker hub. Remeber now your image name is “dockerhub-username/image-tag-name” give exactly the same name to your deployment container.
You can create the deployment with the help of yaml or by following command.

docker run <deployment-name> --image <image-name> --replicas <number-of-replicas> --port 80

You can change the port if you are using any other image as file system of your image. I’m using nginx image’s file system so I’m using port 80.

Now if your deployment is created let’s access it from our machine. For this you can simply expose your deployment with this command:

kubectl expose deploymen <deployment-name> --type NodePort

Hurrrrah...!
You are going to see your index.html file working with kubernetes. See service by running: 

“kubectl get services”

To see Your deployment in working state run:
Run the command
“minikube service <service-name>”

in your case <service-name> will be the same as your deployment name if you just exposed your deployment by a command.

I have attached the Dockerfile and .yaml of deployment with this file. You can navigate to them to see further details.
Let me know if there is any mistake in commands or in the way I tried to solve the problem.
