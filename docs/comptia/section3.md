---
title: 3.0 Security Architecture
sidebar_position: 3
toc_min_heading_level: 2
toc_max_heading_level: 6
---

## 3.1 Architecture Models

- **Cloud**: 
  - **Responsibility Matrix**: IaaS, PaaS, SaaS... who is responsible for security? Should be well documented
  - **Hybrid Considerations**: More than one public or private cloud
  - **Third-Party**: Vendors You, the cloud provider, and third parties.

- **Infrastructure as Code (IaC)**: Modern approach to managing and provisioning computing infrastructure through code and automation, rather than through manual processes. This methodology allows developers and IT operations teams to define and manage their infrastructure using configuration files or scripts, which can be versioned and maintained similarly to application code.

- Serverless:

- Microservices:

- Network Infrastructure

  - Physical Isolation
    - Air-Gapped
  - Logical Segmentation
  - Software-Defined Networking (SDN)

- On-Premises

- **Centralized/decentralized** refers to how the company centralizes its network infrastructure (having all decisions and functions handled by a single main hub) or decentralizes it (having functions and decisions distributed among various nodes).
provider via service level agreements (SLAs) and often feature rapid recovery options.

- Containerization:

- Virtualization:

- IoT:

- Industrial Control Systems (ICS)/Supervisory Control and Data Acquisition (SCADA):

- Real-time Operating System (RTOS):

- Embedded Systems:

- High Availability:

## 3.2 Security Principles with Infrastructure Security

### Infrastructure Considerations

- **Security Zone Model**: Systems within the same zone should have same access control requirements allowing for streamlined management.
- **Device Attribute**:
  - **Active**: Continuous and proactive approach to monitoring and managing IT systems, networks, applications, or any other components of an information technology infrastructure. The goal of active monitoring is to detect issues, vulnerabilities, or irregularities in real-time or near real-time, allowing for prompt responses to prevent or mitigate potential problems.
  - **Passive Monitoring**: The process of observing and collecting data from IT systems, networks, or applications without actively interacting with the monitored components.
- **Failure Modes**:
  - **Fail-open**: Defaults to allow access in the event of a failure. 
  - **Fail-Close**: Defaults to deny access in a failure event.
- **Network Appliances**:
  - **Jump Server**: Secure intermediary server which allows users to access to another network segment. 
  - **Proxy Server**: Acts as an intermediary between a client and the internet. It forwards client requests to the appropriate server and then returns the server’s response to the client.
  - **Intrusion Presentation System (IPS)**: Monitors network traffic in real time for suspicious activity and block or mitigate threats.
  - **Intrusion Detection System (IDS)**: Monitors network traffic and system activities for signs of suspicious or unauthorized behavior but does not actively block threats.
    - **Network Choke points**: Both Inbound and outbound traffic can be monitored. External monitors inbound traffic vice versa
    - **Inline**: Block malicious traffic but is a single point of failure. Real Time analysis.
- **Port Security**:
  - **802.1x**: IEEE 802.1X is a network access control standard that provides an authentication mechanism for devices wishing to connect to a LAN or WLAN.
  - **Extensible Authentication Protocol (EAP)**: An authentication framework that supports various authentication methods, allowing for flexible and secure authentication in network environments.
  - **Extensible Authentication Protocol - Message Digest 5 (EAP-MD5)**: Secure hash of a password sent to the authenticating server.
  - **Flexible Authentication via Secure Tunneling (EAP-FAST)**: Cisco's replacement for LEAP. It addresses LEAP vulnerabilities using Transport Layer Security (TLS) with Protected Access Credential (PAC) instead of certificates.\
  - **Protected Extensible Authentication Protocol (PEAP)**: Server-side public key certificate to create an encrypted tunnel between the supplicant and authentication server.
- **Firewall Types**: 
  - **Web Application Firewall (WAF)**: Filters HTTP/HTTPS traffic between the web app and the internet
  - **Unified Threat Management (UTM)**: Integrates multiple security functions into a single system, simplifying security management and enhancing overall security by providing a comprehensive defense-in-depth approach.
  - **Next-Generation Firewall (NGFW)**: Deeper inspection and mroe granular control over network traffic.
    - **Application Layer 7**: Deep inspection TLS encrypted traffic.
    - **Transport Layer 4**: Basic IP packet filtering, cant integrate with network directories for role based content filtering.

### Secure Communication/Access

- **Tunneling**: Method used in networking to encapsulate a packet within another packet, allowing it to be transmitted securely over a network.
  - **Transport Layer Security (TLS)**: 
  - **Internet Protocol Security (IPSec)**: Designed to secure IP communications by providing encryption, authentication, and integrity at the network layer. It creates secure tunnels for all traffic between two networks or devices.
- **Software-Defined Wide Area Network (SD-WAN)**: SD-WAN provides a centralized platform for managing the WAN, allowing administrators to configure policies and manage traffic flows from a single dashboard. This simplifies network management and enhances operational efficiency.
- **Secure Access Service Edge (SASE)**: SASE integrates various technologies to provide secure access to applications and data regardless of the user’s location or the network they are using.

## 3.3 Data Protection

### Data Types 

- **Regulated**: Data managed by a third party.
- **Trade Secret**: organizations' "secret formulas" - often unique.
- **Intellectual Property**: Publicly visible but copyrighted/trademarked.
- **Legal Information**: Records, documents, info - contains PII.
- **Financial information**: Internal financial details, payment records, payment medium data, etc.
- **Human and Non-Human Readable**: Understandable, clear and obvious.

### Data Classifications

- **Sensitive**: Data that, if disclosed, could cause harm to individuals or organizations.
- **Confidential**: Information that is intended to be kept secret within the organization.
- **Public**: Information that is available to the general public and poses no risk if disclosed.
- **Restricted**: Data that is limited in access and is sensitive but does not require the same level of protection as confidential data.
- **Private**: Personal data about individuals that is not public but not necessarily sensitive.
- **Critical**: Essential data necessary for business operations and decision-making.

### Data Considerations

- **Date States**: 
  - **Data At Rest**: Data that is stored on a physical or virtual storage medium and is not actively being accessed or transmitted. 
    - Protecting data at rest often involves encryption
  - **Data in Transit**: Data that is actively moving across a network
    - Protecting data in transit involves TLS, Obfuscation
  - **Data In use**: The state where data is read, written, or modified by active processes.
    - data in active memory
- **Data Sovereignty**: Data sovereignty is the concept that data is subject to the laws and governance structures within the nation the company collects data. Complying with data sovereignty laws is crucial for an international company storing data from different locations.

### Methods to Securing Data

- **Hashing**: Represent data as a short string of test (message digest, fingerprint, etc.) 
- **Masking**: A type of obfuscation, hides some of the original data.
- **Tokenization**: Replace sensitive data with non-sensitive placeholder.
- **Obfuscation**: Makes something normally understandable difficult to understand.

## 3.4 Resillience and Recovery In Security Architecture

### Site Considerations

- **Hot Site**: A real-time replica of the primary system. If the main site fails, the hot site takes over. 
  - Costly
- **Warm Site**: Cost-effective but requires more time to get up and running
- **Cold Site**: A place where customers can move after a disaster.
  - Contains all the facilities but not user data.

### Backups

- **Data Journaling**: records changes to data in a log to track and monitor data


### Power

- **Uninterruptible power supply (UPS)** systems act in the event of a power failure, allowing systems to keep running and/or to be safely shut down, minimizing downtime and associated costs.