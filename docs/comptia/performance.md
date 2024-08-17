---
title: Performance Questions
sidebar_label: 'Performance'
sidebar_position: 6
---

import TextColor from '@site/src/components/TextColor';

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">Log Analysis</TextColor>



![Logs](img/loganalysis.png)

<p><u> <TextColor lightColor="#000000" darkColor="#E3D4AD">Mitigation Actions</TextColor></u> </p>

1. `Data Loss Prevention` to address the unauthorized data transfer issue by monitoring and controlling data transfers across the company network. 
2. `Email Content Filtering` by inspecting email content and blocking transfers.
3. `Restricting After-Hours Server Access` by limiting time frames the servers are accessible. 
  
<p><u> <TextColor lightColor="#000000" darkColor="#E3D4AD">Data Transfers</TextColor></u> </p>

- `HTTPS`

<p><u> <TextColor lightColor="#000000" darkColor="#E3D4AD">Web Applications</TextColor></u> </p>

- Cipher: `AES-256-GCM-SHA384`
- TLS Version: `1.3`

<p><u> <TextColor lightColor="#000000" darkColor="#E3D4AD">Compliance Considerations</TextColor></u> </p>

- `HIPPA`

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">Data Infrastructure</TextColor>

<p><u><TextColor lightColor="#000000" darkColor="#E3D4AD">Data Center Infrastructure</TextColor></u> </p>
 
|    Benefit                            | Drawback           | 
|:------------------------------------:|:------------------:|
| Less Complex Infrastructure          | Signle Vender      |
| Server Redundancy                    |  Onsite Backup     | 

<p><u><TextColor lightColor="#000000" darkColor="#E3D4AD">Cloud Infrastructure</TextColor></u> </p>
 
|    Benefit                   | Drawback                    | 
|:---------------------------:|:---------------------------:|
| MultiVender  Infrastructure | More Complex Infrastructure |
| More Resilient Operations   | Price Variations            |


<p><u> <TextColor lightColor="#000000" darkColor="#E3D4AD">Recomendations</TextColor></u> </p>


- Best Solution: `Cloud Infrastructure`
- `Multiple Venders`
- `Power Redundancy`
- `Resilient Backups`

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">Bring your Own Device (BYOD), Personally-Enabled Policy (COPE)</TextColor>

- <TextColor lightColor="#000000" darkColor="#E3D4AD">Security Engineer:</TextColor> The CIO wants to setup a system that tightly sandboxes enterprise mobile apps and prevents data loss. 
  - `Mobile Device management`
    - MDM solutions can enforce security policies and monitor user behavior and generate alerts.
- <TextColor lightColor="#000000" darkColor="#E3D4AD">CEO:</TextColor> The CEO is requesting the ability to track the location of corporate equipment in case of theft or loss.
  - `Location services`
- <TextColor lightColor="#000000" darkColor="#E3D4AD">CTO:</TextColor> The CTO wants specific mobile phone functions restricted in and out of the company building.
  - Geofencing
    - Can alter capabilities of a device and turn functionality on or off to limit mobile device function based on location
- <TextColor lightColor="#000000" darkColor="#E3D4AD">Infrastructure manager:</TextColor> The infrastructure manager insists on usiong the company phone for internet access for their laptops while remote. 
  - `Allow Hotspots`
- <TextColor lightColor="#000000" darkColor="#E3D4AD">DevOps Manager:</TextColor> The development team has concerns regarding data confidentiality. 
  - `MicroSD HSM`
    - Hardware Security Module cards can work with existing MDM software for authentication and Public Key Infrastructure functions.
- <TextColor lightColor="#000000" darkColor="#E3D4AD">Accountant:</TextColor> The accounting division wants help in keeping mobile devices secure during travel. 
  - `Remote wipe`

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">IP Connections / FQDN and certificates</TextColor>

 <details>
    <summary>Junior Pen Tester</summary>
      <ul>
        <li>I'm trying to browse this website using an IP address. When i do, my browser displays a certificate error. What's wrong?</li>
      </ul>
    <p>Issues may arise from how a certificate gets configured and the client uses it, such as a mismatch between the certificate configured to use a fully qualified domain name and the client connecting via an IP address.</p>
  </details>

- <TextColor lightColor="#000000" darkColor="#E3D4AD">Likely Issue:</TextColor> The Cert is configured with FQDN
- <TextColor lightColor="#000000" darkColor="#E3D4AD">Likely Solution:</TextColor> Connect using https://www.comptia.org


 <details>
    <summary>Program Manager</summary>
      <ul>
        <li>Hey, I know my Certificate is configured correctly, so are you saying my issue may be client related?</li>
      </ul>
    <p>A server will reject a correctly configured certificate due to a client missing the Root and Intermediate Certificate Authority certificates.</p>
  </details>

- <TextColor lightColor="#000000" darkColor="#E3D4AD">Likely Issue:</TextColor> Client missing Chain of Trust
- <TextColor lightColor="#000000" darkColor="#E3D4AD">Likely Solutions:</TextColor> `Install root CA-G2 Cert` and `Install secure CA-G2 Cert`

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">Remote connection </TextColor>

> Choose remote connectivity method that is widely acknowledged for its robust security features and is highly scalable
> Determine an authentication strategy that employs asymmetric cryptographic techniques for verifying identities 
> Securely Incorporating layers of security measures to further safeguard user authentication for robust security and scalability


1. <TextColor lightColor="#000000" darkColor="#E3D4AD">Remote Access Method:</TextColor> 
   1. `Virtual Private Network (VPN)`
2. <TextColor lightColor="#000000" darkColor="#E3D4AD">User Authentication:</TextColor> 
   1. `Multifactor Authentication`
3. <TextColor lightColor="#000000" darkColor="#E3D4AD">Device Authentication:</TextColor> 
   1. `Public-Key Cryptography`

 <details>
    <summary>Identify Key security Considerations for remote access</summary>
      - [ ] Firewall rules Based on user Roles
      - [ ] Encrypted Log storage
      - [ ] Intrusion Detection System
      - [ ] Disable Clipboard Sharing
      - [ ] Secure Data Transmission Protocols
      - [ ] Enable Rate Limiting on Login Attempts
  </details>

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">Security Controls</TextColor>

1. **Owner**: Malicious actor in the machine, add systems that identify activity on our network
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Security Control Remediation:</TextColor> `Technical`
       - Technical controls encompass hardware and software
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Functional Type:</TextColor> `Detective`
       - Detective Controls identify and record attempts
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Control:</TextColor> `Setup Firewall`
2. **IT Manager**: Employees visiting unsecure websites
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Security Control Remediation:</TextColor> `Operational`
       - Operational controls involve human element - policies procedures and training
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Functional Type:</TextColor> `Directive`
       - These controls enforce rule behaviors like policies, best practice or SOP's
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Control:</TextColor> `Create a policy`
3. **Network Admin**: Server room not behind locked door.
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Security Control Remediation:</TextColor> `Physical`
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Functional Type:</TextColor> `Preventive`
       - Preventive controls act to eliminate or reduce likelihood of an attack
   - <TextColor lightColor="#000000" darkColor="#E3D4AD">Control:</TextColor> `Keycard`

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">Line of Credit Loan</TextColor>

1. <TextColor lightColor="#000000" darkColor="#E3D4AD">Renewing Defenses:</TextColor>
   1. `Reinstante VPN acccess`
   2. `restore SSL/TLS encryption`
   3. `Activate security Event monitoring`
2. <TextColor lightColor="#000000" darkColor="#E3D4AD">User access security:</TextColor>
   1. `Apply ABAC`
   2. `Restrict admin access by location`
   3. `adopt MFA`
3. <TextColor lightColor="#000000" darkColor="#E3D4AD">Reviewing of existing configurations:</TextColor>
   1. `Keep record of restoration steps`
   2. `Validate Current setup against industry standards`
   3. `Examine system audit trails`
4. <TextColor lightColor="#000000" darkColor="#E3D4AD">Preemptive Actions:</TextColor>
   1. `Routine security review cycle`
   2. `Apply patch management` 
   3. `Mandate training sessions`
   4. `Facilitate data redundancy `
   5. `Designate cyber incident team`

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">Medical Access and Regulations</TextColor>

1. **Access**:

- <TextColor lightColor="#000000" darkColor="#E3D4AD">Front Desk Interns: PCI DSS - Billing</TextColor>
  - [ ] Patient Information
  - [ ] Billing Codes
- <TextColor lightColor="#000000" darkColor="#E3D4AD">Medical Co-Ops: assist in the plans,</TextColor> address with symptoms
  - [ ] Patient Medical Symptoms
  - [ ] Recomended Treatment Plans
- <TextColor lightColor="#000000" darkColor="#E3D4AD">Clinic Staff: all</TextColor>
  - [ ] Medical Records
  - [ ] Patient Information
  - [ ] Patentia Medical SYmtoms
  - [ ] Recomended Treatment Plans
  - [ ] Patient Treatment Data
  - [ ] Billing Codes
- <TextColor lightColor="#000000" darkColor="#E3D4AD">Governance Committee:</TextColor>
  - [ ] Medical Rcords
  - [ ] Patient Medical SYmtoms
  - [ ] Recomended Treatment Plans
  - [ ] Patient Treatment Data
  - [ ] Billing Codes

2. **Regulations**
  
|  HR System | Patient Database System |
|:----------:|:-----------------------:|
| SoX        | HIPAA                   |
| ISO 27001  | PCI DSS                 |
| CCPA       | ISO 27017               |


<TextColor lightColor="#000000" darkColor="#E3D4AD">HR:</TextColor>

- ` SOX`: Sarbanes–Oxley Act -- Financial Records
- `ISO 27001`: HR data security of people
- `CCPA`: Personal Data 

<TextColor lightColor="#000000" darkColor="#E3D4AD">Database:</TextColor>

- `HIPPA` governs handling, storage and sharing of PHI
- `ISO 27017` Provides guidelines for securing cloud based systems and data 

