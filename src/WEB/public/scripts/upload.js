// Upload.js - AFEClassroom

async function upload(file, directory, id)
{
    const req = await fetch(`http://${window.location.hostname}/${directory}/${id}`, 
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "file": file
            }
        }
    ); 
}