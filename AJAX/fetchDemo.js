let data = {
   first_name: 'Charan',
   last_name: 'Netha',
   job_title: 'Trainee Software Engineer'
};
const options = {
   method: 'POST',
   body: JSON.stringify(data),
   headers: {
     'Content-Type': 'application/json'
}
}
fetch('##Server', options)
   .then(res => res.json())
   .then(res => console.log(res));