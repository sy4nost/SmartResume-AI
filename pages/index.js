import React, { useState } from 'react';

export default function Home() {
  const [resumeText, setResumeText] = useState('');
  const [optimizedResume, setOptimizedResume] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOptimize = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/optimize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: resumeText }),
      });
      const data = await response.json();
      setOptimizedResume(data.optimizedText);
    } catch (error) {
      setOptimizedResume('Error occurred while optimizing.');
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>Smart Resume AI</h1>
      <textarea
        rows="10"
        cols="80"
        placeholder="Paste your resume text here..."
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />
      <br />
      <button onClick={handleOptimize} disabled={loading} style={{ marginTop: '10px' }}>
        {loading ? 'Optimizing...' : 'Optimize Resume'}
      </button>
      <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
        <h3>Optimized Resume:</h3>
        <div>{optimizedResume}</div>
      </div>
    </div>
  );
}
