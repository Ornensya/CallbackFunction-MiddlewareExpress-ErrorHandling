const express = require ('express');
const app = express();

function fetchData(callback) {
    setTimeout(function() {
        const data = 'ini adalah data yang diambil';
        callback(data);    
    }, 1000);
    
}
//Callback function for handling data
function handleData(data) {
    console.log('Data yang diterima:', data);   
}
app.get('/', (req, res) => {
    fetchData(handleData)
    res.send('Fetching data...');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

