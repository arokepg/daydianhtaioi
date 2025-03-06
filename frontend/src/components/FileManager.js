import React, { useState } from 'react';
import FileViewer from 'react-file-viewer';

export default function FileManager() {

    const [file, setFile] = useState(null)
    const [ext, setExt] = useState(null)

    const handleChange = (e) => {
        const selectedFile = e.target.files[0]
        const filename = e.target.files[0].name
        setExt(filename.split('.').pop())
        console.log(selectedFile)
        setFile(selectedFile)
    }

    return (
        <div className="file-manager">
            <input type="file" onChange={handleChange}/>
            {file && (
            <FileViewer
                fileType={ext}
                filePath={URL.createObjectURL(file)}
            />
            )}
        </div>
    );
}