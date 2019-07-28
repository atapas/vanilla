const user = '{"firstName": "Tapas","lastName": "Adhikary" }'

function parse() {
    try {
        let validJson = JSON.parse(user);
        console.log(validJson);
    }catch {
        console.log('Not a valid JSON');
    }
}

parse();