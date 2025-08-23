---
title: In-vehicle IDS using Federated Learning
description: Re-implemented in Peer-to-Peer decentralized federated learning context for Internet of Vehicles (IoV)
order: 1
layout: project.njk
---
## Intrusion Detection System for In-Vehicle Network Security Using Federated Learning.

*Project conducted by **Trần Thái Huy** and **Phan Quốc Đạt** under the supervision of **Dr.Nguyễn Tấn Cầm and MSc.Nghi Hoàng Khoa.***

# Overview

This project focuses on enhancing in-vehicle network security by developing an **Intrusion Detection System (IDS)** using **Federated Learning (FL)**. Derived from the original model “**FedMSE**: Semi-supervised federated learning approach for IoT network intrusion detection” (Nguyen Van Tuan & Razvan Beuran, 2025). We adapted the model for a **decentralized and peer-to-peer** scenario to remove the single point of failure in traditional FL systems. **[Full Project Report (PDF)](/assets/images/projects/001/FedMSE-Decentralized.pdf)**

# Approach

Instead of relying on a central server, gateways in our system collaboratively selected aggregators each round, validated models using MSE-based scoring, and ensured robustness against malicious updates. We evaluated the system on both **N-BaIoT** and **Kitsune** datasets under IID and non-IID scenarios.
![Federated Learning Process Flow](/assets/images/projects/001/federated-learning-flow.png)

# Results

1. SAE-CEN consistently outperformed Autoencoder, achieving mean AUC up to 93.77% (IID) and 93.53% (non-IID).
2. MSEAvg proved most effective in distinguishing normal vs. abnormal traffic in decentralized settings.
3. The peer-to-peer design improved resilience while maintaining competitive accuracy, showing strong potential for real-world IoV intrusion detection.

![Performance Comparison Chart](/assets/images/projects/001/performance-results.png)


# Credits:

Van Tuan Nguyen and Razvan Beuran (2025), “FedMSE: Semi-supervised federated learning approach for IoT network intrusion detection”, Computers Security, 151, p. 104337, issn: 0167-4048, doi: [https://doi.org/10.1016/j.cose.2025.104337](https://doi.org/10.1016/j.cose.2025.104337https:/), url: [https://www.sciencedirect.com/science/article/pii/S0167404825000264](https://www.sciencedirect.com/science/article/pii/S0167404825000264).
