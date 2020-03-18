# Installation

To get MyContainer and all required Containers up and running, follow these steps for installation. Because of the Docker Environment, every package should work as it is precisely aligned with the code.

## Perquisites

To run the code, you will need `docker`. Docker can be downloaded here and runs on every operating system.  
Everything else will be installed automatically. But be warned, this can take some time!

## Deployment

Clone the logu-sawtooth-container repository, then make sure that you have the `docker`
and `docker-compose` commands installed on your machine.

To run the application, navigate to the project's root directory, then use
this command:

```bash
docker-compose up
```

This command starts all components in separate containers.

The available HTTP endpoints are:  
Service | Address
------------ | -------------
Client | [**http://localhost:8040**](http://localhost:8040)
Supply Chain REST API | [**http://localhost:8000**](http://localhost:8000)
PostgreSQL Adminer | [**http://localhost:8080**](http://localhost:8080)
Sawtooth REST API | [**http://localhost:8008**](http://localhost:8008)
