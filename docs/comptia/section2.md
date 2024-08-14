---
title: 2.0 Threats, Vulnerabilities, Mitigation
sidebar_position: 2
---

import TextColor from '@site/src/components/TextColor';

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">2.1 Threat Actors and Motivations</TextColor>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Threat Actors</TextColor>

- **Nation-State**: Sophisticated attackers, APT, government threats.  
- **Unskilled Attacker**: Limited technical knowledge and capabilities and may use simple and unsophisticated methods to exploit vulnerabilities, often relying on easily accessible tools or scripts found online.
- **Hacktivist**: A Hacktivist is an individual or group that uses hacking techniques as a form of protest or to advance a political or social cause.
- **Insider Threat**: Refers to a security risk posed by individuals within an organization who misuse their access to harm the organization.
- **Shadow IT**: internal IT gone rogue

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Motivations</TextColor>

- **Data Exfiltration**: The unauthorized transfer of data from a computer or network, often involving sensitive or confidential information.
- **Service Disruption**: Actions taken to interrupt or halt the normal functioning of services, applications, or networks.

## <TextColor lightColor="#064CD5" darkColor="#EF1761">2.2 Threat Vectors and Attack Surfaces</TextColor>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Human Vectors & Social Engineering</TextColor>

- **BEC (Business email compromise)**: Uses emails to target executives by impersonating a colleague to exploit trust and authority in a company.
- **Phishing**: An attempt to scam the user into providing information via a fake email.
- **Smishing**: A form of phishing which targets mobile devices via SMS.
- **Spear phishing**: Deceptive emails tailored to appear credible with specific targets in mind.
- **Typosquatting**: Registered domain names with misspellings of popular websites to trick users into believing they're accessing a trusted site.
- **Vishing**: Voice phishing by spoofing caller ID.
- **Whaling**: Whaling scam emails are designed to masquerade as a critical business email, sent from a legitimate business authority


## <TextColor lightColor="#064CD5" darkColor="#EF1761">2.3 Vulnerabilities</TextColor>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Application </TextColor>

- **Buffer Overflow**: When data is written to a buffer which exceeds the allocated size and overwrites adjacent memory.
- **Memory Injection**: Malicious code injected into the memory of running processes allowing the attacker to execute arbitrary code.
- **Race Condition**: Two events happening almost simultaneously in a program which depend on the timing/order of events.
  - **Time-of-Check (TOC)**: A vulnerability that occurs when a check on a condition (e.g., file permissions) is performed before an action is taken, and the condition can change between the check and the action.
  - **Time-of-Use (TOU)**: A vulnerability that occurs when the condition checked and the action taken are dependent on the timing of events, leading to potential exploitation.
    - Time-of-check (TOC) aims to enforce access controls at the time of user authentication, and Time-of-use (TOU) ensures proper access controls during data usage.


### <TextColor lightColor="#000000" darkColor="#E3D4AD">Web-based</TextColor>

- **Structured Query Language injection (SQLi)**: Allows attackers to interfere with the queries an application makes to its database.
- **Cross-site scripting (XSS)**: Security vulnerability that allows attackers to inject malicious scripts into webpages viewed by other users.


### <TextColor lightColor="#000000" darkColor="#E3D4AD">Mobile Devices</TextColor>

- **Jailbreaking**: A method used to gain elevated privileges and access to system files on mobile devices.
  - Allows users to install unauthorized apps, customize the device's appearance and behavior, access system files, and bypass restrictions implemented by Apple.
- **Sideloading**: Installing unauthorized Apps from non official sources.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Virtualization</TextColor>

- **Virtual machine escape (VME)**: An application, process, or user within a virtual machine (VM) can bypass the virtual machine's barriers and interact directly with the host system.

## <TextColor lightColor="#064CD5" darkColor="#EF1761">2.4 Malicious Activity</TextColor>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Application Attacks</TextColor>

- **Directory Traversal**: Manipulates URL to access sensitive data to exploit validation/sanitization.
- **Replay attacks**: malicious repetition or delayed transmission of valid data.


### <TextColor lightColor="#000000" darkColor="#E3D4AD">Malware Attacks</TextColor>

- **Backdoor**: Allow access to a remote system through a secret entry point, allowing attackers to bypass access controls.
- **Bloatware**: Preinstalled software on a device that may be unnecessary or redundant.
- **Keylogger**: Surveillance recording keystrokes made on a device.
- **Logic bomb**: A logic bomb is a piece of malicious code that is triggered by a specific event or condition, such as a date or an action performed by a user. It lies dormant until activated.
- **Ransomware**: Ransomware is a type of malware that encrypts a victim's files or locks them out of their systems, demanding payment (usually in cryptocurrency) to restore access.
- **Rootkit**: Tools that enable administrator-level access.
- **Spyware**: Spyware is a type of malicious software that secretly monitors user activity and collects information without the user's consent. It can track browsing habits, capture passwords, and gather personal data.
- **Trojan**: Deceptive malicious software which appears as a legitimate application.
- **Virus**: Malware that attaches itself to programs or files. Spread via user action such as running an infected program
- **Worm**: Worms spread from computer to computer with the ability to self replicate. 

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Network Attacks</TextColor>

- **Distributed Denial-of-Service (DDoS)**: An attack where compromised systems (usually from a trojan) are used to send requests to a single system creating network instability.
  - **Amplified**: Protocols are exploited allowing the attackers to amplify attack traffic.
  - **Reflected**: Requests are sent to various servers with a forged source address (target's IP address) causing the servers to send their response to the target.
- **Domain Name System (DNS) Attacks**: 
  - **DNS Spoofing**: False DNS records are injected into a DNS cache which may redirect users to malicious sites.
  - **DNS Hijacking**: DNS queries are redirected to malicious servers.
- **On-path attack**: Attacker intercepts and possibly modifies packets in transit.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Cryptographic Attacks</TextColor>

- **Downgrade Attacks**: Involve forcing a system to abandon its high-security mode and revert to a less secure state.
- **Collision Attack**: Two different inputs produce the same hash value.
- **Birthday**: Based on the birthday paradox which focuses on finding collisions in hash functions by exploiting the probability of two or more inputs producing the same output.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Password Attacks</TextColor>

- **Brute Force**: Trial and error method by trying all possible combinations of passwords or keys.
- **Credential-Stuffing**: Attackers employ usernames and passwords leaked from other breaches and try them on different websites, banking on the fact that many users reuse their passwords across multiple sites.
- **Spraying**: Password spraying involves attempting a few commonly used passwords against many accounts simultaneously.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Indicators of Compromise (IOC)</TextColor>

- **Impossible travel**: The detection of a user login activities that are geographically impossible or highly unlikely based on the physical constraints of time and distance.
  - Indicator: Login activity from two or more locations that are far apart geographically

## <TextColor lightColor="#064CD5" darkColor="#EF1761">2.5 Mitigation Techniques</TextColor>

- **Address Space Layout Randomization (ASLR)**: Mitigate buffer overflow mem exploits 
- **Secure Deallocation**: Takes any residual data in a resource (memory, disk space, etc.) and cleans or overwrites it before reuse, preventing potential data leakage.

