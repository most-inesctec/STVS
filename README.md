# SpatioTemporal Visual Storyteller (_STVS_)

A work initially developed by [Daniel Marques](https://github.com/rendoir) as its Master Thesis in Informatics and Computing Engineering @FEUP.

<!-- Missing description of what it is and a print -->
The __SpatioTemporal Visual Storyteller _(STVS)___ is a novel approach based on automated generation of interactive storyboards that summarize the evolution of a spatiotemporal phenomenon through a set of frames that represent the most relevant changes across all events of interest. The figures below depict an example of a spatiotemporal phenomenon visualized using the _STVS_.

| Storyboard example | Settings example |
|:-:|:-:|
| <img width="1410" alt="Screenshot 2020-08-26 at 13 38 10" src="https://user-images.githubusercontent.com/22712373/91306759-e6bcb100-e7a4-11ea-9a42-10bc71d76657.png"> | <img width="1391" alt="Screenshot 2020-08-26 at 13 38 28" src="https://user-images.githubusercontent.com/22712373/91306763-ea503800-e7a4-11ea-8408-983aea34f594.png"> |

# Getting Started

To run the application make sure you have `docker` and `docker-compose` installed.

## Running

1. Clone the repository
```shell
git clone https://github.com/rendoir/STVS.git
cd STVS/src/
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

# Extending and understanding _STVS_

For a guide on how to extend _STVS_ (e.g., supporting a new transformation), an overview of the codebase or a description of the application entry points, please refer to [this document](DOCUMENTATION.md).

A more thorough description of the _STVS_ is available at Chapter 4 and 5 of the [__associated Master Thesis__](https://repositorio-aberto.up.pt/handle/10216/128548). 

# Acknowledgements

The author thank ERDF – European Regional Development Fund through the Operational Programme for Competitiveness and Internationalisation - COMPETE 2020 Programme and by National Funds through the Portuguese funding agency, FCT – Fundac¸ ˜ao para a Ciˆencia e a Tecnologia within project PTDC/CCI-INF/32636/2017 (POCI-01-0145-FEDER-032636).

#Citation

Marques, D., Carvalho, A., Rodrigues, R., Carneiro, E., Spatiotemporal Phenomena Summarization through Static Visual Narratives, 24th International Conference Information Visualisation (IV2020 Online), Victoria University, Melbourne, Australia and Technische Universität Wien, TU Wien, Vienna Austria, 7-11, September 2020, DOI: https://doi.org/10.1109/IV51561.2020.00081 
