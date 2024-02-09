// This is a basic authentication logic. In real applications, you would use server-side authentication.
//const users = [
    //{ username: "user1", password: "password1" },
    //{ username: "user2", password: "password2" }
//];

//function authenticate(username, password) {
    //return users.find(user => user.username === username && user.password === password);
//}
// Function to set a cookie
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get a cookie value by name
function getCookie(name) {
    const keyValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
    return keyValue ? keyValue[2] : null;
}

// Function to delete a cookie by name
function deleteCookie(name) {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
}

// Check if the user is already authenticated (has a cookie)
const userId = getCookie('user_id');
if (userId) {
    // Redirect the user to another page or perform other actions (auto-login)
    alert(`Welcome back, User ${userId}!`);
} else {
    // User needs to log in
    alert('Please log in to continue.');
}