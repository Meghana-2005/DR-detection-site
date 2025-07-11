import React, { useState } from 'react';

const Pd = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setResult('');
  };

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      console.log('Prediction response:', data);
      setResult(`${data.predicted_label}`);

    } catch (error) {
      console.error('Error:', error);
      setResult('Error predicting image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='bg-white font-semibold text-center flex justify-center'>
      <div className='mt-4 mb-4 ml-4 mr-4'>
        <div className='bg-orange-600 text-white py-5 px-5 rounded-3xl shadow-md shadow-orange-600'>
          <h2 className='text-xl mb-2'>Upload an image of your retina</h2>
          <p>Click on the submit button to know the RESULT</p>
          <div className='grid py-2'>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            <div
              className='mt-4 bg-white rounded-full text-orange-600 py-1 px-3 justify-self-center hover:shadow-md hover:shadow-white cursor-pointer'
              onClick={handleSubmit}
            >
              <button disabled={loading}>
                {loading ? 'Predicting...' : 'Submit'}
              </button>
            </div>
          </div>
          {result && (
            <div className='mt-4 text-lg bg-white text-orange-600 px-4 py-2 rounded-xl'>
              <strong>Prediction:</strong> {result}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pd;
