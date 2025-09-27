**Dynamically creating and appending new elements to the DOM**
creating a new element and its type assigning to a variable. **const list=document.createElemetn('li')**;
list content can be given in the list like this **list.textContent="This is list1"**
Append child elements to its parent element. **parent.appendChild(list)**

What steps did you take to ensure accurate updates to the total price?
I added **parseFloat()** to the total price as it was keep throwing error that toFixed(2) is not a function.
When all of the lists got removed, it shows $NAN instead of '0' for the total price. So was checking in removeItems function that the price is !NAN then return

How did you handle invalid input for product name or price?
For price and for the product name I have used isNAN to check whether its number or a not a number. 
**if(!isNaN(productNameInput.value))
  {
    alert("Please enter valid Product Name!");
  }**  
**
  **if (isNaN(price)) return;**
What challenges did you face when implementing the remove functionality?
In the remove functionality when I click the remove button it wasn't removing the list. Then figured that out that I have used outside the function where I have created button.
Then when I click remove the product list got removed but my total remains the same or it was keep adding price from the removed item. That's because I have called the updateTotalPrice function
from the display function inside forEach()loop. These are the challenges I faced in this Lab.
