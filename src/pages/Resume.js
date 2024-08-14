import React from 'react';
import Layout from '@theme/Layout';

function Resume() {
  const resumeImageUrl = '/img/resumepng.png'; // Directly reference the path

  return (
    <Layout title="Resume" description="My Resume">
      <main>
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <h1>My Resume</h1>
          <img src={resumeImageUrl} alt="Resume" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </main>
    </Layout>
  );
}

export default Resume;