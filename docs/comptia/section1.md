---
title: 1.0 General Security Concepts
sidebar_position: 1
toc_min_heading_level: 2
toc_max_heading_level: 6
---

import TOCInline from '@theme/TOCInline';
import Mermaid from '@theme/Mermaid';

<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel={6} />

import Tag from '@site/src/components/Tag';

## 1.1 Security Controls

### <Tag color="#ea14cb">Control Categories</Tag>

- **Technical Controls**
  - Security controls built into the hardware, software, or firmware components
  - Enforces security policies by controlling access, protecting data, and preventing threats.
  - > Firewalls, Antivirus, Intrusion Detection Systems

- **Managerial Controls**
  - Policies, procedures, and guidelines to guide secure practices.
  - Based on overall risk management, risk assessments, training, and compliance
  - > Security Policies, Security Awareness Training, Incident Response Plans

- **Operational Controls**
  - Human element rather than system security
  - Ensures security processes are executed properly, incidents are handled effectively, and security measures are maintained.
  - > Security guards and spreading awareness

- **Physical Controls**
  - Tangible measures to protect physical assets such as buildings, servers, and devices.
  - Physical controls prevent specific human interaction with a system.
  - > Security cameras, fences, and gates

### Control Types

- **Preventive**: Reduces the likelihood of a security breach from occurring.
  - Technical: Firewall rules
  - Managerial: On-boarding policies
  - Operational: Security Guards
  - Physical: Keycards
- **Detective**: Identify and record attempts of intrusions
  - Technical: IDS
  - Managerial: Reviews 
  - Operational: Security Guards Patrols 
  - Physical: Video Surveillance Systems
- **Corrective**: Attempt to reverse the impact of an incident after an events been detected.
  - Technical: Backup restoration
  - Managerial: Creating Policies
  - Operational: Active IDS
  - Physical: Fire extinguisher
- **Deterrent**: Controls to prevent incidents by discouraging threats and intrusion attempts.
  - Technical: Application splash screen
  - Managerial: Demotion threats
  - Operational: Reception desk
  - Physical: Warning Signs
- **Compensating**: Temporary control using other means because existing controls aren’t sufficient.
  - Technical - Blocking a specific application instead of patching
  - Managerial - Implementing a separation of duties
  - Operational - Require multiple security staff
  - Physical - Power generator after a power outage
- **Directive**: Enforce rule of behavior like policy
  - Technical: TOTP
  - Managerial: Seperation of duties
  - Operational: Multipule security staff
  - Physical: Physical generator after outage

---

## 1.2 Security Concepts

### CIA Triad

- **Confidentiality**: Ensuring that information is accessible only to those who have the proper authorization, preventing unauthorized access.
- **Integrity**: Ensures the accuracy and reliability of data throughout its lifecycle. It ensures that data is not altered or tampered with during transmission or storage.
- **Availability**: Ensures that information and resources are accessible and available to authorized users whenever needed. It involves preventing disruptions or downtime that could impact access.

### Non-Repudiation

- **Non-repudiation Security Principle**: Ensures data originated from a verified sender and reached the intended recipient.
- **Proof of Integrity**: Verify that data does not change and remains accurate and consistent.
- **Hash**: A short string of text used to represent data, AKA message digest, a fingerprint.
- **Proof of Origin**:
  - **Integrity**: Proof that the message was not changed.
  - **Authentication**: Prove the source where the data was sent.
  - **Non-Repudiation**: Verify the signature isnt fake.

### Authentication, Authorization, and Accounting (AAA)

- **AAA Framework**: Verifies a user's identity (authentication), determines what resources the user can access (authorization), and monitors the user's activities within the system (accounting).
  - **Identification**: Who you claim to be.
  - **Authentication**: Prove who you say you are.
  - **Authorization**: The type of accesses the user has on a system.
  - **Accounting**: A log of exactly what happened.

### Zero Trust

- **Planes of Operation**:
- **Control Plane**: Defines the policies and rules, and manages the actions of the data plane.
  - **Adaptive identity**: Considers the source and requested resources using multiple risk indicators(e.g., relationship to organization, physical location, type of connection, IP address, etc.), and automatically makes authentication stronger if needed.
- **Data Plane**: Actively enforces the security policies set by the control plane. Does the actual processing of frames, packets, or network data. 
  - **Security Zones**:  Refers to a logical or physical segment of a network that is subject to a specific set of security policies and controls. It is used to compartmentalize and organize network resources based on their security requirements and the level of trust assigned to entities within each zone. Looks at where you are connecting from and connecting to. 
  - **Policy Enforcement Point (PEP)**: A component within a network or information security system that is responsible for enforcing access control policies and makes decisions based on predefined policies. The PEP acts as a gatekeeper, monitoring access requests and allowing or denying access based on the established policies.
  - **Policy Decision Point (PDP)**: Often works in conjunction with the PDP. The PDP is responsible for defining and managing access control policies, while the Policy Decision Point enforces the policies.

### Physical Security

- **Access control vestibule**: two-door system where the first door closes before the 2nd opens. 
- **Bollards**: short vertical posts made of steel, concrete, or other durable material and installed around a perimeter or entrance.

### Deception and Disruption Technology

- **Honeytoken**: False Credentials to distract attackers
- **Honeypot**: Decoy System to luer attacker and monitor strategies. 

---

## 1.3 Change Management

### Business Processes Impacting Security Operation

- **Approval Process**: Maintains uptime and availability of systems. Avoids downtime, confusion, and mistakes.
- **Ownership**: Individual or department that decides a change is needed.
- **Stakeholders**: Individuals or departments that will be impacted by the change.
- **Impact Analysis**: Involves evaluating the potential effects and consequences of a proposed change in an organization's system or processes.
- **Test Results**: Ensure change works properly before pushing to production.
- **Backout Plan**: A plan that reverts back to the original production system.
- **Maintenance Window**: A predefined period of time during which planned changes, updates, or maintenance activities are scheduled to be implemented.
- **Standard Operating Procedure (SOPs)**: Documented guidelines that outline the step-by-step processes and protocols to be followed when planning, implementing, and evaluating changes within an organization's systems or processes.

---

## 1.4 Cryptographic Solutions

### Public Key Infrastructure (PKI)

### Tools

- **Trusted Platform Module (TPM)**: Typically integrated into the motherboard of a computer or device and are designed to enhance the security of the overall computing environment. It provides a secure and isolated environment for storing cryptographic keys, performing cryptographic operations, and ensuring the integrity of the system's boot process. 
- **Hardware Security Module (HSM)**: A security device you can add to a system to manage, generate, and securely store cryptographic keys.

### Certificates

- **Certificate Authorities (CAs)**: Trusted entities that issue digital certificates, and establishes trust by verifying the identity of certificate holders.
- **Certificate Revocation Lists (CRLs)**: Lists maintained by CAs containing revoked certificates, and prevents the use of compromised or invalid certificates.
- **Online Certificate Status Protocol (OCSP)**: Allows real-time checking of a certificate's validity and provides a more dynamic approach compared to CRLs.
  - **OCSP Responder**: A server that receives requests from clients regarding revocation status of a certificate.
  - **OSCP Request**: An OCSP request is sent to the OCSP responder when a client needs to verify the status of a certificate. 
  - **OCSP Response**: The OCSP responder replies with an OCSP response indicating if the certificate is valid or revoked. 
- **Self-Signed Certificates**: Certificates are signed by its own entity
  - Suitable for internal purposes as the certificates are not signed by a public Certificate Authority
- **Third-Party Certificates**: Issued by recognized Certificate Authorities
  - Third-party CAs are integrated into standard web browsers. Certificates issued by these CAs are automatically trusted by users' browsers.
- **Root of Trust (RoT)**: Top level of trust within the certificate hierarchy. The root of trust serves as a foundational element for establishing trustworthiness.
- **Certificate Signing Request (CSR) Generation**: Initiates a formal request submitted to a Certificate Authority (CA) for the issuance of a digital certificate. Includes details like the entity's public key and identity.
  1. Generate a key pair
  2. Submit the CSR to the CA
  3. Validating the CSR by the CA 
  4. Signing the certificate
  5. Issuance - The CA returns the signed cert to the entity
- **Wildcards**: A special type of SSL/TLS certificate that secures a domain and all its subdomains with a single certificate.
  - **Subject Alternative Name (SAN)**:  Wildcard certificates often leverage the Subject Alternative Name extension within the X.509 certificate format. SAN allows for the inclusion of additional domain names, enabling the certificate to support multiple domains.
  - **Wildcard Domains**: A wildcard domain is a domain name that uses a wildcard character (*) to represent any subdomain under a specific domain.






<Mermaid
  value={`graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;`}
/>