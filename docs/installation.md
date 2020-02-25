# Installation

Follow the steps to install the application.

## Perquisites

To run the code, you will need `docker`. Everything else will be installed automatically.

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
- Client: **http://localhost:8040**
- Supply Chain REST API: **http://localhost:8000**
- PostgreSQL Adminer: **http://localhost:8080**
- Sawtooth REST API: **http://localhost:8008**
