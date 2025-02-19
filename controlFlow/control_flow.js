let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

function dietaryServices(userType) {
    let dietaryPerms = 0;
    let dietaryString = "no access";
    let oneOnOnePerms = false;
    switch (userType) {
        case "employee":
            dietaryPerms = 2;
            dietaryString = "full access";
            break;
        case "enrolled":
            dietaryPerms = 2;
            dietaryString = "full access";
            oneOnOnePerms = true;
            break;
        case "subscriber":
            dietaryPerms = 1;
            dietaryString = "partial access";
            break;
        default:
            //do nothing
    }

    console.log(`Hello user type ${userType}`);
    console.log(`Dietary Services Permissions: ${dietaryString}`);
    console.log(`One-on-One Services Permissions: ${oneOnOnePerms === true ? "Yes" : "No"}`);
}

dietaryServices("employee");
dietaryServices("enrolled");
dietaryServices("subscriber");
dietaryServices("unknown");
