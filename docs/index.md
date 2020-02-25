# Container Transactons on Hyperledger Sawtooth

by [J0nasW](https://github.com/J0nasW) and [LogU](https://www.logu.tuhh.de/) at Hamburg University of Engineering and forked from [sawtooth-simple-supply](https://github.com/hyperledger/education-sawtooth-simple-supply).

## Introduction

This simple implementation shows a typical transaction of release orders regarding container shipment.
Basically, the process starts, when a container ship is about to arrive into a harbor and the release of a specific container is pending. The ship-operator generates a release order and informs the top-level logistic service provider (LSP). The LSP now has the permission to pick up the container in form of a transaction number + pin. This transaction number is being forwarded multiple times as the top-level LSP tries to outsource the pick-up process.
This representation of a blockchain-managed container-owner tries to eliminate the security risk of giving away the key to the conainer. Instead, the right of picking up the container itself is transfered to multiple users inside the blockchain.
Therefore, an app called "MyContainer" is introduced.

(FIGURE 1)
