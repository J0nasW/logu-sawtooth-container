# logu-sawtooth-container
This is a simple Implementation of Hyperledgers Sawtooth to display the container transactions in a Harbour.

## Usage


Clone the Simple Supply repository, then make sure that you have the `docker`
and `docker-compose` commands installed on your machine.

To run the application, navigate to the project's root directory, then use
this command:

```bash
docker-compose up
```

This command starts all Simple Supply components in separate containers.

The available HTTP endpoints are:
- Client: **http://localhost:8040**
- Simple Supply REST API: **http://localhost:8000**
- PostgreSQL Adminer: **http://localhost:8080**
- Sawtooth REST API: **http://localhost:8008**
