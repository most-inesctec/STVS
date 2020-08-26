# Static Spatiotemporal Visual Narratives Composer (_S2VNC_)

A work initially developed by @rendoir as its Master Thesis in Informatics and Computing Engineering @FEUP.

<!-- Missing description of what it is and a print -->

# Getting Started

To run the application make sure you have `docker` and `docker-compose` installed.

## Running

1. Clone the repository
```shell
git clone https://github.com/rendoir/feup-thesis.git
cd S2VNC/src/
```

2. Run the application
    - For deployment
    ```shell
    docker-compose up
    ```

    - For development
    ```shell
    docker-compose -f docker-compose.dev.yml up
    ```

3. Open your browser
    - In deployment
    ```
    http://127.0.0.1:8080/visualization/1/
    ```

    - In development
    ```
    http://127.0.0.1:8080/
    ```

> __Important Note__: Tested and working on both Google Chrome and Mozilla Firefox. 

# Extending and understanding S2VNC

For a guide on how to extend _S2VNC_ (e.g., supporting a new transformation), an overview of the codebase or a description of the application entry points, please refer to [this document](DOCUMENTATION.md).