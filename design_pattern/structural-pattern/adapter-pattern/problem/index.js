console.log( "localStorage length: ", localStorage.length );

var uid = localStorage.getItem("user_id");

console.log( "user_id: ", uid );

if (!uid) {
    console.log('User ID not found. Setting the user id and token...');
    localStorage.setItem("token", "TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ");
    localStorage.setItem("user_id", "12345");
} else {
    console.log('User ID found.', uid);
    console.log('clearning the User ID...');
    localStorage.clear();
}


/**
 * In adaptor pattern -> When you take an object, keep its interface but adapt it to a new environment or solution
 * It make incompatible classes become compatible
 * 
 * Code should be adopted to different environment
 */

// Problem with this code is, it uses `localStorage api` on brower but if you run this code in `Node.JS` envioronment it will break