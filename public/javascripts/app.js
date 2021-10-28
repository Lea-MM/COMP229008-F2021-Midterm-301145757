/*  File Name: app.js
    Author's Name: Lea Marie Magbalot
    Student ID: 301145757
    Web App Name: Favorite Book List
*/

console.log('Goes to the client side.');

if(getTitle == "Book List")
{
    let deleteButtons = document.querySelectorAll('.btn-danger');
        
    for(button of deleteButtons)
    {
        button.addEventListener('click', (event)=>{
            if(!confirm("Are you sure?")) 
            {
                event.preventDefault();
            }
        });
    }
}