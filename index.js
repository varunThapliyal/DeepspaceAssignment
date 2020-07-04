import PRODUCT_DATA from './productData.js';
import itemData from './itemData.js';
console.log(PRODUCT_DATA);



const renderProduct=(product)=>{
    console.log(product.title);
    const markup=`<div class="productOverview${product.title}" id=${product.title}>
                      <h1 class="title">${product.title}</h1>    
                  </div>
                 `
                     document.querySelector('.products').insertAdjacentHTML('beforeend',markup);

                    product.items.map((item)=>{
                   
    const markupItem=`<div class="preview">
  
                         <div class='image'>
                            <img class='Images' src=${item.imageUrl} alt="">
                         </div>
           
                         <div class="productFooter">
                            <span class="name">${item.name}</span>
                            <span class="price">$ ${item.price}</span>
                         </div>
                         <a href="#${item.id}" >
                            <button class='ghost' value=${item.id} }>More Details..</button>
                         </a>

                      </div>
            
            `;
               document.querySelector(`.productOverview${product.title}`).insertAdjacentHTML('beforeend',markupItem);
        
          })
}


              
               document.querySelector('.productDetails').style.display='none';
               window.addEventListener('hashchange',()=>{

               var hv=window.location.hash.replace('#','');
               console.log(hv);
                  if(hv===''||hv==='Hats'||hv==='Sneakers'||hv==='Jackets'||hv==='Women'||hv==='Men')
                  {
                     document.querySelector('.products').style.display='block';
                     document.querySelector('.productDetails').style.display='none';
                  }
                  else
                  {
                     document.querySelector('.products').style.display='none';
                     clearItem();
                     const currentItem=itemData[hv];
                     console.log(currentItem);
                     renderCurrentItem(currentItem)
                     document.querySelector('.productDetails').style.display='block';
                  }
      


    
})



         PRODUCT_DATA.map((product)=>
         {
                    renderProduct(product)
         })

         const clearItem=()=>
         {
            document.querySelector('.productDetails').innerHTML='';
         }

         const renderCurrentItem =(item)=>{
         const markUpItem=`<div class="productContainer" >
                             <a href="#" class='Homepage'>Go back to Home Page</a>
  
                             <div class='itemImageDiv'>
                                <img src=${item.imageUrl} alt="" class="itemImage">
                             </div>
                             <div class="productDescription">
                                <h1 class="itemHeading">${item.name}</h1>
                                <p class="itemPrice">$ ${item.price}</p>
                                <p class="productDefinition">
                                     Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                     It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                     It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                                <a href=#${item.id} class='addLink' >
                                   <button class='btn-cart'>Add To Cart</button>
                                </a>
                             </div>
                          </div>`

                          document.querySelector('.productDetails').insertAdjacentHTML("beforeend",markUpItem);
                   }

                   
  
      document.querySelector('.header').addEventListener('click',(e)=>{
                   
                   
               
               if(e.target.closest('.cartIcon')){
                document.querySelector('.dropdown').classList.toggle('toggleVisible');

               }
      });
              var quantity=0; 
      document.querySelector('.productDetails').addEventListener('click',(e)=>{
        
              
         if(e.target.closest('.btn-cart')){
              const dItem=window.location.hash.replace('#','');
              renderDropdown(itemData[dItem]);
              quantity=quantity+1;
              document.querySelector('.quantity').innerText=quantity;
              console.log(quantity);
              }
        });

      
     const renderDropdown=(item)=>{
             const markupDropdown = `<div class="dropdownItem">
             <img src=${item.imageUrl} class="prodImage">
             <p class='Pname'>${item.name}</p>
          </div>`

          document.querySelector('.dropdown').insertAdjacentHTML('beforeend',markupDropdown);
     }


        
          
                  
                