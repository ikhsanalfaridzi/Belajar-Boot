
function editProfile() {
    
    document.querySelector('.profile-card').style.display = 'none';


    document.getElementById('edit-form').style.display = 'block';
}


function saveProfile() {
    
    var name = document.getElementById('edit-name').value;
    var job = document.getElementById('edit-job').value;
    var bio = document.getElementById('edit-bio').value;

    
    document.getElementById('name').innerText = name;
    document.getElementById('job').innerText = job;
    document.getElementById('bio').innerText = bio;


    document.getElementById('edit-form').style.display = 'none';

    
    document.querySelector('.profile-card').style.display = 'block';
}


function cancelEdit() {
    
    document.getElementById('edit-form').style.display = 'none';

    document.querySelector('.profile-card').style.display = 'block';
}
