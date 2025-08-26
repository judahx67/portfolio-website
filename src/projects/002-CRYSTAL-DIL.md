---
title: CRYSTALS-Dilithium Encryption Algorithm for E-commerce Website
description: Implementing Open Quantum Safe Library's CRYSTALS-Dilithium Level 3 for an E-commerce website
order: 2
layout: project.njk
---

# Implementing CRYSTALS-Dilithium in secure e-commerce transactions. 

*Project conducted by **Mai Xuân Huy, Nguyễn Đình Quang, Trần Thái Huy** under the supervision of **Dr. NGUYỄN NGỌC TỰ***

## Overview

This project demonstrates the integration of the **CRYSTALS-Dilithium Level 3** digital signature scheme, provided by the **Open Quantum Safe (OQS) library**, into a modern e-commerce website. 

The aim is to future-proof online transactions against quantum attacks by replacing traditional cryptographic signatures (RSA/ECDSA) with post-quantum alternatives.

## Approach

As the website is built with Python using the Flask framework, the OQS is not natively compatible and cannot be called directly. Our plan was to compiled a DLL (Dynamic Link Library) from C++ and use it in the website backend. 

![Dilithium Integration Diagram](/assets/images/projects/002/encryption_flow.png)
![Website Procedures](/assets/images/projects/002/website_flow.png)
## Results

1. Successfully replaced RSA/ECDSA signatures with Dilithium Level 3 for authentication and order verification.
2. Demonstrated a practical path for post-quantum security in web applications.



### Credits:

[Open Quantum Safe Project.](https://openquantumsafe.org/) 
