# SAML Troubleshooting

## Overview
This workshop will demonstrate how to troubleshoot issues that might occur while configuring SAML between an identity provider and a service provider. The demo environment is already configured properly. So, the lab exercises will focus on how to use a SAML tracer extension to gather information.

## Prerequisites
All lab exercises share the following set of requirements:

- Knowledge of SAML and its authentication flow
- You have [git](https://git-scm.com/) installed to clone this repository

## Getting Started
Before you begin, you must complete the following steps:

1. Clone the GitHub repository
```
git clone https://github.com/pgodby/te-saml-troubleshooting
cd te-saml-troubleshooting
``` 

## Lab Exercises
In this workshop, you will deploy the base environment and then proceed with the lab exercises to troubleshoot SAML issues. After completing the lab exercises, you should have a better undertanding of the tools used to debug a configuration and the type of data that is passed back and forth between an identity provider and a service provider.

1. [Deploy the Base Environment](./labs/Lab1.md)
1. [Troubleshoot SAML](./labs/Lab2.md)