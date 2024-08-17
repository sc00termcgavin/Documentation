---
title: 1.0 General Security Concepts
sidebar_position: 1
---
import TextColor from '@site/src/components/TextColor';
import Mermaid from '@theme/Mermaid';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

---

## <TextColor lightColor="#064CD5" darkColor="#EF1761">1.1 Security Controls</TextColor>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Control Categories</TextColor>

<Tabs>
  <TabItem value="Technical" label="Technical" default>
    <details>
      <summary>Technical Controls</summary>
        <ul>
          <li>Controls implemented using systems.</li>
          <li>Enforces security policies by controlling access, protecting data, and preventing threats.</li>
        </ul>
      <p>Firewalls, Antivirus, & Intrusion Detection Systems</p>
    </details>
  </TabItem>
  <TabItem value="Managerial" label="Managerial">
    <details>
      <summary>Managerial Controls</summary>
        <ul>
          <li>Administrative controls associated with security design and implementation.</li>
          <li>Based on overall risk management, risk assessments, training, and compliance.</li>
        </ul>
      <p>Security Policies, Security Awareness Training, Standard Operating Procedures (SOP)</p>
    </details>
  </TabItem>
  <TabItem value="Operational" label="Operational">
    <details>
      <summary>Operational Controls</summary>
        <ul>
          <li>Controls implemented by people instead of systems.</li>
          <li>Ensures security processes are executed properly, incidents are handled effectively, and security measures are maintained.</li>
        </ul>
      <p>Security guards and awareness programs.</p>
    </details>
  </TabItem>
  <TabItem value="Physical" label="Physical">
    <details>
      <summary>Physical Controls</summary>
        <ul>
          <li>Tangible measures to protect physical assets such as buildings, servers, and devices.</li>
          <li>Physical controls prevent specific human interaction with a system.</li>
        </ul>
      <p>Security cameras, fences, and gates</p>
    </details>
  </TabItem>
</Tabs>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Control Types</TextColor>

<div style={{ width: '100%' }}>
  <!-- Table for Control Types -->
  <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid black' }}>
    <thead>
      <tr>
        <th colspan="7" style={{ border: '1px solid black', textAlign: 'center' }}>Control Types</th>
      </tr>
      <tr>
        <th style={{ border: '1px solid black' }}>Categories</th>
        <th style={{ border: '1px solid black' }}>Preventive</th>
        <th style={{ border: '1px solid black' }}>Deterrent</th>
        <th style={{ border: '1px solid black' }}>Detective</th>
        <th style={{ border: '1px solid black' }}>Corrective</th>
        <th style={{ border: '1px solid black' }}>Compensating</th>
        <th style={{ border: '1px solid black' }}>Directive</th> <!-- New Column Header -->
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style={{ border: '1px solid black' }}>Technical</td>
        <td style={{ border: '1px solid black' }}>Firewall</td>
        <td style={{ border: '1px solid black' }}>Splash Screen</td>
        <td style={{ border: '1px solid black' }}>System Logs</td>
        <td style={{ border: '1px solid black' }}>Backup Recovery</td>
        <td style={{ border: '1px solid black' }}>Block, not Patch</td>
        <td style={{ border: '1px solid black' }}>File Storage Policies</td> <!-- New Column Data -->
      </tr>
      <tr>
        <td style={{ border: '1px solid black' }}>Managerial</td>
        <td style={{ border: '1px solid black' }}>On-boarding Policy</td>
        <td style={{ border: '1px solid black' }}>Demotion</td>
        <td style={{ border: '1px solid black' }}>Login Report Review</td>
        <td style={{ border: '1px solid black' }}>Policies for reporting</td>
        <td style={{ border: '1px solid black' }}>Separation of Duties</td>
        <td style={{ border: '1px solid black' }}>Compliance Policies</td> <!-- New Column Data -->
      </tr>
      <tr>
        <td style={{ border: '1px solid black' }}>Operational</td>
        <td style={{ border: '1px solid black' }}>Guard Shack</td>
        <td style={{ border: '1px solid black' }}>Reception Desk</td>
        <td style={{ border: '1px solid black' }}>Security Patrol</td>
        <td style={{ border: '1px solid black' }}>Contact Authorities</td>
        <td style={{ border: '1px solid black' }}>Multiple Security Staff</td>
        <td style={{ border: '1px solid black' }}>Security Policy Training</td> <!-- New Column Data -->
      </tr>
      <tr>
        <td style={{ border: '1px solid black' }}>Physical</td>
        <td style={{ border: '1px solid black' }}>Door Lock</td>
        <td style={{ border: '1px solid black' }}>Warning Signs</td>
        <td style={{ border: '1px solid black' }}>Motion Detectors</td>
        <td style={{ border: '1px solid black' }}>Fire Extinguisher</td>
        <td style={{ border: '1px solid black' }}>Power Generator</td>
        <td style={{ border: '1px solid black' }}>Sign Authorized Persons</td> 
      </tr>
    </tbody>
  </table>

  <!-- Description List -->
  <div style={{ marginTop: '20px' }}>
    <ul style={{ listStyleType: 'disc', marginLeft: '20px' }}>
      <li><strong>Preventive:</strong> Reduces the likelihood of a security breach from occurring. Prevents issues</li>
      <li><strong>Deterrent:</strong> Controls to prevent incidents by discouraging threats and intrusion attempts. </li>
      <li><strong>Detective:</strong> Identify and record attempts of intrusions.</li>
      <li><strong>Corrective:</strong> Attempt to reverse the impact of an incident after an event has been detected.</li>
      <li><strong>Compensating:</strong> Temporary control using other means because existing controls aren’t sufficient.</li>
      <li><strong>Directive:</strong> Directs behavior or actions in a desired way. Enforce rule of behavior like policy.</li>
      <ul>
        <li>Corrective operational controls are measures taken to address and rectify issues, deficiencies, or deviations identified in a system, process, or operation.</li>
      </ul>
    </ul>
  </div>
</div>

## <TextColor lightColor="#064CD5" darkColor="#EF1761">1.2 Security Concepts</TextColor>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">CIA Triad</TextColor>

- **Confidentiality**: Ensuring that information is accessible only to those who have the proper authorization, preventing unauthorized access.
- **Integrity**: Ensures the accuracy and reliability of data throughout its lifecycle. It ensures that data is not altered or tampered with during transmission or storage.
- **Availability**: Ensures that information and resources are accessible and available to authorized users whenever needed. It involves preventing disruptions or downtime that could impact access.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Non-Repudiation</TextColor>

- **Non-repudiation Security Principle**: Ensures data originated from a verified sender and reached the intended recipient.
- **Proof of Integrity**: Verify that data does not change and remains accurate and consistent.
- **Hash**: A short string of text used to represent data, AKA message digest, a fingerprint.
- **Proof of Origin**:
  - **Integrity**: Proof that the message was not changed.
  - **Authentication**: Prove the source where the data was sent.
  - **Non-Repudiation**: Verify the signature isnt fake.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Authentication, Authorization, and Accounting (AAA)</TextColor>

- **AAA Framework**: Verifies a user's identity (authentication), determines what resources the user can access (authorization), and monitors the user's activities within the system (accounting).
  - **Identification**: Who you claim to be.
  - **Authentication**: Prove who you say you are.
  - **Authorization**: The type of accesses the user has on a system.
  - **Accounting**: A log of exactly what happened.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Zero Trust</TextColor>

- **Planes of Operation**:
- **Control Plane**: Defines the policies and rules, and manages the actions of the data plane.
  - **Adaptive identity**: Considers the source and requested resources using multiple risk indicators(e.g., relationship to organization, physical location, type of connection, IP address, etc.), and automatically makes authentication stronger if needed.
- **Data Plane**: Actively enforces the security policies set by the control plane. Does the actual processing of frames, packets, or network data. 
  - **Security Zones**:  Refers to a logical or physical segment of a network that is subject to a specific set of security policies and controls. It is used to compartmentalize and organize network resources based on their security requirements and the level of trust assigned to entities within each zone. Looks at where you are connecting from and connecting to. 
  - **Policy Enforcement Point (PEP)**: A component within a network or information security system that is responsible for enforcing access control policies and makes decisions based on predefined policies. The PEP acts as a gatekeeper, monitoring access requests and allowing or denying access based on the established policies.
  - **Policy Decision Point (PDP)**: Often works in conjunction with the PDP. The PDP is responsible for defining and managing access control policies, while the Policy Decision Point enforces the policies.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Physical Security</TextColor>

- **Access control vestibule**: two-door system where the first door closes before the 2nd opens. 
- **Bollards**: short vertical posts made of steel, concrete, or other durable material and installed around a perimeter or entrance.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Deception and Disruption Technology</TextColor>

- **Honeytoken**: False Credentials to distract attackers
- **Honeypot**: Decoy System to luer attacker and monitor strategies. 

## <TextColor lightColor="#064CD5" darkColor="#EF1761">1.3 Change Management</TextColor>


### <TextColor lightColor="#000000" darkColor="#E3D4AD">Business Processes Impacting Security Operation</TextColor>

- **Approval Process**: Maintains uptime and availability of systems. Avoids downtime, confusion, and mistakes.
- **Ownership**: Individual or department that decides a change is needed.
- **Stakeholders**: Individuals or departments that will be impacted by the change.
- **Impact Analysis**: Involves evaluating the potential effects and consequences of a proposed change in an organization's system or processes.
- **Test Results**: Ensure change works properly before pushing to production.
- **Backout Plan**: A plan that reverts back to the original production system.
- **Maintenance Window**: A predefined period of time during which planned changes, updates, or maintenance activities are scheduled to be implemented.
- **Standard Operating Procedure (SOPs)**: Documented guidelines that outline the step-by-step processes and protocols to be followed when planning, implementing, and evaluating changes within an organization's systems or processes.

## <TextColor lightColor="#064CD5" darkColor="#EF1761">1.4 Cryptographic Solutions</TextColor>

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Obfuscation</TextColor>

- **Data Masking**: Redacting contents of a database field by substituting a string such as X in place. 
- **Salting**: Adds random data to inputs prior to applying a cryptographic function like hashing. 
- **Steganography**: A technique of hiding information within other, non-suspicious data, such as embedding a secret message within an image or audio file.
- **Tokenization**: Randomly generated token replaces a database field while maintaining the original data on a separate token server. 

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Tools</TextColor>

- **Trusted Platform Module (TPM)**: Typically integrated into the motherboard of a computer or device and are designed to enhance the security of the overall computing environment. It provides a secure and isolated environment for storing cryptographic keys, performing cryptographic operations, and ensuring the integrity of the system's boot process. 
- **Hardware Security Module (HSM)**: A security device you can add to a system to manage, generate, and securely store cryptographic keys.

### <TextColor lightColor="#000000" darkColor="#E3D4AD">Certificates</TextColor>

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
    A[Generate Key Pair] --> B[Create Certificate Signing Request CSR];
    B --> C[Submit CSR to Certificate Authority CA];
    C --> D[CA Verification Process];
    D --> E[Receive and Install Certificate];
    E --> F[Configure the Server];
    F --> G[Test Configuration];
    G --> H[Monitor Expiration and Renew];

    subgraph Verification
        D1[Domain Validation DV];
        D2[Organization Validation OV];
        D3[Extended Validation EV];
        D --> D1;
        D --> D2;
        D --> D3;
    end
    `}
/>


