# Deploy the Base Environment

## Overview
In this lab exercise, you will deploy a set of Docker containers that are required for the troubleshooting exercises.

| Container | Description |
| --- | --- |
| identity_provider | A [SimpleSAMLphp](https://simplesamlphp.org/) instance that will be used to authenticate users and provide identity services. |
| service_provider | A barebones Node.js server application to simulate the role of a service provider using browser redirects. |

## Prerequisites
To complete this exercise, you must have the following software installed:
- [Docker Engine](https://docs.docker.com/engine/install/)
- [Docker Compose](https://docs.docker.com/compose/install/) 

## Lab Exercise 1

1. In a terminal window, enter the following commands to build and start the Docker containers. Leave this window open.
    ```
    cd /te-apm-troubleshooting/base
    docker-compose up --build
    ```
1. To stop the Docker containers, return to this terminal window and press: **CTRL-C**
1. Review the [Help](Help.md) section for tips on working with the Docker containers.

---
**Labs Exercises:** 1 | [2](Lab2.md) | [Help](Help.md)