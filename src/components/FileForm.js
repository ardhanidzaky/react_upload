import {useState} from 'react';

function FileForm() {
    const [file, setFile] = useState(null); 
    // const [files, setFiles] = useState([]); // Uncomment: To upload more than 1 file.

    const handleFileInputChange = (event) => {
        setFile(event.target.files[0])
        // setFiles(Array.from(event.target.files)) // Uncomment: To upload more than 1 file.
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file_upload', file);

        // Uncomment: To upload more than 1 file.
        // files.forEach(file => {
        //     formData.append('file_upload', file);
        // })

        try {
            const endpoint = 'http://127.0.0.1:8000/predict/'
            const response = await fetch(endpoint, {
                method: 'POST'
                , body: formData
            });

            if (response.ok) {
                const data = await response.json()
                console.log(data['Results'])
            } else {
                console.error('Failed to upload file');
            }
        } catch(error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Upload File</h1>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                    <input type='file' onChange={handleFileInputChange} />
                </div>

                <button type='submit'>Upload</button>
            </form>
        </div>
    )
}

export default FileForm