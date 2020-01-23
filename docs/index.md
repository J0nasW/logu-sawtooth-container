# Container Transactons on Hyperledgers Sawtooth Blockchain

by [J0nasW](https://github.com/J0nasW) and [LogU](https://www.logu.tuhh.de/) at Hamburg University of Engineering.

## Introduction

This simple implementation shows a typical transaction on release orders regarding container shipment in a harbor. The container is being unloaded of a ship and a release order is generated automatically. In this process, a new transaction on the blockchain is being made and a release token for this container is generated. The token is given to the first logistic service provider (LSP) to get the container. He then gives the authority to get the container to another LSP. This process is being repeated five times (see Fig. 1). Finally the last LSP sends a truck with a valid token to the terminal. The terminal now checks, if the token hasn't expired yet and then loads the container onto the truck.

(FIGURE 1)
