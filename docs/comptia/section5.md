---
title: 5.0 Security Management
sidebar_position: 5
toc_min_heading_level: 2
toc_max_heading_level: 6
---

## 5.1 Security Governance

### Policies

- **Acceptable Use Policy (AUP)**: Rules and guidelines for using an organization’s technology resources, such as computers, networks, and internet access.
- **Right-to-Audit Clause**: To ensure the company can periodically assess the vendor's security practices.

### Laws and Regulations

- **General Data Protection Regulation (GDPR)**: Legal framework which sets guidelines for collection, retention, processing personal information. Data Protection
  - Global
- **Federal Deposit Insurance Corporation (FDIC)**: Regulates state-chartered financial institutions.
- **Health Insurance Portability and Accountability Act (HIPAA)**: Protect private health information of someone.
- **Sarbanes-Oxley Act (SOX)**: Executives take responsibility for financial reporting. Protects investors from fraud.
- **ISO 27001**:  Standard for managing sensitive company information.
- **ISO 27017**: Substandard of the 27001 that focuses on cloud security. 
- **California Consumer Privacy Act (CCPA)**: Privacy act that gives residents greater control over their personal data.
- **Payment Card Industry Data Security Standard (PCI DSS)**: Set of security standards designed to protect card information during and after a financial transaction.

## 5.2 Risk Management

### Risk Assessment

- **Risk Identification**: Finding potential threats that may lead to negative impacts on the company. 
- **Ad hoc**: Performing for one specific purpose.
- **Recurring**: Standard intervals

### Risk Analysis

- **Qualitative**: Identify significant risk factors
- **Quantitative**: Risk in terms of numbers. 
- **Single Loss Expectancy (SLE)**: The expected monetary loss every time a risk occurs
  - `Asset Value * Exposure Factor `
- **Annualized Loss Expectancy (ALE):** Expected Yearly cost of an asset due to a Risk in 1 year
  - `(SLE) * (ARO) `
- **Annualized rate of occurrence (ARO)**: Frequency, how often the risk event is likely to occur
- **Exposure Factor (EF)**: % of loss that a threat would have on an asset.
- **Impact**: Potential Loss incurred if risk occurs.
- **Asset Value (AV)**: Asset value based on cost or cost to replace

- **Risk Appetite**: Total exposed amount an organization wishes to undertake based on risk-return trade-offs for its business objectives.
- **Risk Threshold**: Refers to a specific point at which risk becomes unacceptable and the company must take action.
- **Risk Tolerance**: Risk the company can handle. Refers to the degree of variability.
- **Residual Risk**: Likelihood AFTER mitigation, transfer, acceptance measures 

### Risk Management Strategies

- **Risk Acceptance**: Countermeasures not in place.
- **Risk Avoidance**: Stop an activity that gives risk.
- **Risk Mitigation**: Reducing exposure to risk factors. Overall process.
- **Risk Transference**: Assigning Risk to a third party.

### Business Impact Analysis

- **Recovery Point Objective (RPO)**: Maximum acceptable **AGE** of data you can lose. 
- **Recovery Time Objective (RTO)**: identifies the maximum time it takes to recover a system during an outage.
- **Key Risk Indicators (KRI)**: Metrics to see early signal of increasing risk exposure.

- **Mean Time to Repair (MTTR)**: Repairable Assets
  - average time it takes to repair a system or component after a failure occurs
  - `Total Downtime / Number of Repairs`
- **Mean Time Between Failures (MTBF)**: Non-repairable
  - consecutive failures of a system or component during normal operation.
  - `Total Operational Time / Number of Failures`
- **Mean Time To Failure (MTTF)**:
  - `Total Operational Time / Number of Failures`


## 5.3 Third-Party Risk 

### Agreement Types

- **Service Level Agreement (SLA)**: A formal, written contract between a service provider and a customer that outlines the expected level of service and the metrics by which that service is measured. 
- **Memorandum of Understanding (MOU)**: Partnership, broad agreement to express an intent to work together.
  - Informal and Non Binding
- **Memorandum of Agreement (MOA)**: Detailed relationship formal agreement with specific obligations.
  - No legal recourse
- **Master service agreement (MSA)**: Legal contract and agreement of terms, a framework to cover later transactions. 
- **BPA (Business Partners Agreement**): Partner agreement Setup with resellers.

## 5.4 Security Compliance

- **Compliance Monitoring**: involves risk assessments, data collection, and analysis.
  - Characteristics:
    - Automnation to improve accuracy
    - Conduct thorough investations of 3rd parties
- **Internal Compliance**: Assess organizations compliance status 
  - Serves internal stakeholders
  - Concentrates on operational details and supports the company's decision-making
  - Provides service to risk managers, executives, security analysts, and privacy officers

  
## 5.5 Audits and Assessments

- **Attestation**: Opinion of truth that is associated with an audit. individuals or entities to formally acknowledge their understanding of compliance obligations and commitment to adhere to them through signed agreements, policy acknowledgments, and training activities.
- **Audit committees**: Independent oversight and assurance regarding an organization's practices related to internal controls, risk management, and compliance.
- **External examination**: Assessment of the organization's compliance with international standards and best practices.
- **Engaging a third party for attestation**: provides stakeholders with an objective assurance about the effectiveness of the company's cybersecurity controls and compliance with industry standards, regulations, and best practices.
- **External compliance audit**: UNBIASED compliance status.

### Pen Test

- **ROE (Rules of Engagement)**: Boundries for a Pen Test

### Terms

- **NIST National Institute standards and technology**: Guidance and frameworks for classification of 5 distinct functions
  - identify
  - Protect
  - Detect
  - Respond
  - Recover