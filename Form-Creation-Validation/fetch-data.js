// 1. Define an asynchronous function to fetch user data
async function fetchUserData() {
    // 2. The URL of the public API
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // 3. Get the div where we'll display the user list
    const dataContainer = document.getElementById('api-data');

    try {
        // 4. Fetch the data from the API
        const response = await fetch(apiUrl);

        // 5. Convert the response to JSON
        const users = await response.json();

        // 6. Clear the "Loading user data..." message
        dataContainer.innerHTML = '';

        // 7. Create a <ul> to hold the list of user names
        const userList = document.createElement('ul');

        // 8. Loop through each user in the data
        users.forEach(function(user) {
            // 9. Create a <li> for each user
            const listItem = document.createElement('li');

            // 10. Set the text of the <li> to the user's name
            listItem.textContent = user.name;

            // 11. Add the <li> to the <ul>
            userList.appendChild(listItem);
        });

        // 12. Add the full <ul> to the page inside #api-data
        dataContainer.appendChild(userList);

    } catch (error) {
        // 13. If there's an error, show a message
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching data:', error); // helpful for debugging
    }
}

// 14. Run fetchUserData after the HTML is fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);
