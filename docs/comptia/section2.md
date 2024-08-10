---
title: 2.0 Threats, Vulnerabilities, Mitigation
sidebar_position: 2
toc_min_heading_level: 2
toc_max_heading_level: 6
---

# Threats, Vulnerabilities, and Mitigations

## 2.1 Threat Actors and Motivations

### Threat Actors

- **Shadow IT**: internal IT gone rogue

### Motivations

- **Data Exfiltration**: The unauthorized transfer of data from a computer or network, often involving sensitive or confidential information.
- **Service Disruption**: Actions taken to interrupt or halt the normal functioning of services, applications, or networks.

## 2.2 Threat Vectors and Attack Surfaces

### Human Vectors & Social Engineering

- **BEC (Business email compromise)**: Uses emails to target executives by impersonating a colleague to exploit trust and authority in a company.
- **Phishing**: An attempt to scam the user into providing information via a fake email.
- **Smishing**: A form of phishing which targets mobile devices via SMS.
- **Spear phishing**: Deceptive emails tailored to appear credible with specific targets in mind.
- **Typosquatting**: Registered domain names with misspellings of popular websites to trick users into believing they're accessing a trusted site.
- **Vishing**: Voice phishing by spoofing caller ID.
- **Whaling**: Whaling scam emails are designed to masquerade as a critical business email, sent from a legitimate business authority

### 2.3 Vulnerabilities

### Application 

- **Buffer Overflow**: When data is written to a buffer which exceeds the allocated size and overwrites adjacent memory.
- **Memory Injection**: Malicious code injected into the memory of running processes allowing the attacker to execute arbitrary code.
- **Race Condition**: Two events happening almost simultaneously in a program which depend on the timing/order of events.
  - **Time-of-Check (TOC)**: A vulnerability that occurs when a check on a condition (e.g., file permissions) is performed before an action is taken, and the condition can change between the check and the action.
  - **Time-of-Use (TOU)**: A vulnerability that occurs when the condition checked and the action taken are dependent on the timing of events, leading to potential exploitation.

### Web-based

- **Structured Query Language injection (SQLi)**: Allows attackers to interfere with the queries an application makes to its database.
- **Cross-site scripting (XSS)**: Security vulnerability that allows attackers to inject malicious scripts into webpages viewed by other users.

### Mobile Devices

- **Jailbreaking**: Removing restrictions to gain root access to system files on mobile devices.
- **Sideloading**: Installing unauthorized Apps from non official sources.

### Virtualization

- **Virtual machine escape (VME)**: An application, process, or user within a virtual machine (VM) can bypass the virtual machine's barriers and interact directly with the host system.

## 2.4 Malicious Activity

### Application Attacks

- **Directory Traversal**: Manipulates URL to access sensitive data to exploit validation/sanitization.
- **Replay attacks**: malicious repetition or delayed transmission of valid data.

### Malware Attacks

- **Backdoor**: Allow access to a remote system through a secret entry point, allowing attackers to bypass access controls.
- 
- **Bloatware**: Preinstalled software on a device that may be unnecessary or redundant.
- **Keylogger**: Surveillance recording keystrokes made on a device.
- **Logic bomb**: A logic bomb is a piece of malicious code that is triggered by a specific event or condition, such as a date or an action performed by a user. It lies dormant until activated.
- **Ransomware**: Ransomware is a type of malware that encrypts a victim's files or locks them out of their systems, demanding payment (usually in cryptocurrency) to restore access.
- **Rootkit**: Tools that enable administrator-level access.
- **Spyware**: Spyware is a type of malicious software that secretly monitors user activity and collects information without the user's consent. It can track browsing habits, capture passwords, and gather personal data.
- **Trojan**: Deceptive malicious software which appears as a legitimate application.
- **Virus**: Malware that attaches itself to programs or files. Spread via user action such as running an infected program
- **Worm**: Worms spread from computer to computer with the ability to self replicate. 

### Network Attacks

- **Distributed Denial-of-Service (DDoS)**: An attack where compromised systems (usually from a trojan) are used to send requests to a single system creating network instability.
  - **Amplified**: Protocols are exploited allowing the attackers to amplify attack traffic.
  - **Reflected**: Requests are sent to various servers with a forged source address (target's IP address) causing the servers to send their response to the target.
- **Domain Name System (DNS) Attacks**: 
  - **DNS Spoofing**: False DNS records are injected into a DNS cache which may redirect users to malicious sites.
  - **DNS Hijacking**: DNS queries are redirected to malicious servers.
- **On-path attack**: Attacker intercepts and possibly modifies packets in transit.

### Cryptographic Attacks

- **Downgrade Attacks**: Involve forcing a system to abandon its high-security mode and revert to a less secure state.
- **Collision Attack**: Two different inputs produce the same hash value.
- **Birthday**: Based on the birthday paradox which focuses on finding collisions in hash functions by exploiting the probability of two or more inputs producing the same output.

### Password Attacks

- **Spraying**: Password spraying involves attempting a few commonly used passwords against many accounts simultaneously.
- **Brute Force**: Trial and error method by trying all possible combinations of passwords or keys.

## Indicators of Compromise (IOC)

- **Impossible travel**: The detection of a user login activities that are geographically impossible or highly unlikely based on the physical constraints of time and distance.
  - Indicator: Login activity from two or more locations that are far apart geographically

## 2.5 Mitigation Techniques

- **Address Space Layout Randomization (ASLR)**: Mitigate buffer overflow mem exploits 
- **Secure Deallocation**: Takes any residual data in a resource (memory, disk space, etc.) and cleans or overwrites it before reuse, preventing potential data leakage.

## Authentication

- **Extensible Authentication Protocol - Message Digest 5 (EAP-MD5)**: Secure hash of a password sent to the authenticating serve
  - no mutual authentication.
- **Flexible Authentication via Secure Tunneling (EAP-FAST)**: Cisco's replacement for LEAP. It addresses LEAP vulnerabilities using Transport Layer Security (TLS) with Protected Access Credential (PAC) instead of certificates.
- **Protected Extensible Authentication Protocol (PEAP)**: Server-side public key certificate to create an encrypted tunnel between the supplicant and authentication server
- **RADIUS federation**: Extending the traditional RADIUS (Remote Authentication Dial-In User Service) protocol to support authentication and authorization across different organizations or administrative domains.