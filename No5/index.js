function validateForm() {
    const username = document.forms['main-form']['username'].value;
    const pass = document.forms['main-form']['password'].value;
    const confirmPass = document.forms['main-form']['confirmpassword'].value;
    const email = document.forms['main-form']['email'].value;
    const confirmEmail = document.forms['main-form']['confirmemail'].value;
    if (username == "" || pass == "" || confirmPass == "" || email == "" || confirmEmail == "") {
        alert('ada input file belum terisi!');
    } else if (pass != confirmPass) {
        alert('password tidak sama dengan confirm password!');
    } else if (email != confirmEmail) {
        alert('email tidak sama dengan confirm email');
    }
}