import { useState } from 'react';
import { Text, Button, Box } from '@chakra-ui/react';

import Result from './Result'

function FileForm({ task, endpoint}) {
    const [file, setFile] = useState(null);
    const [results, setResults] = useState(initialResults);

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file_upload', file);

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const data = await response.json();
                setResults(data); // Set the results in the state

            } else {
                console.error('Failed to upload file');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Box alignItems={'center'}>
            <Text textAlign={'center'} fontSize={'x-large'}>
                {task}
            </Text>

            <Box alignItems={'center'}>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '20px' }}>
                        <input type='file' onChange={handleFileInputChange} />
                    </div>

                    <Button colorScheme='blue' size='md' type='submit'>
                        Upload
                    </Button>
                </form>
            </Box>

            {/* Pass the results to the Result component */}
            {results && <Result task={task} results={results} />}
        </Box>
    );
}

// Initialize with default or initial values
const initialResults = {
    'Frontal Results': {
        'Tipe Wajah': '',
        'Simetris Wajah': '',
        'Keseimbangan Transversal': '',
        'Keseimbangan Vertikal': ''
    },
    'Frontal-Smile Results': {
        'Garis Midline Wajah': '',
        'Bukal Koridor': '',
        'Kurva Senyum': '',
        'Garis Senyum': ''
    },
    'Sides Results': {
        'Profil Wajah': '',
        'Sudut Mentolabial': '',
        'Sudut Nasolabial': ''
    },
};

export default FileForm;
