// Storage Controller

// Item Controller
const ItemCtrl = (function(){

    //Item Constructor 
    const Item = function(id,name,calories){
        this.id = id;
        this.name = name;
        this.calories = calories;
    }
   // Data Structure / State
   const data = {
       items: [
           {id: 0, name: 'Steak Dinner', calories: 1200},
           {id: 0, name: 'Cookie', calories: 1200},
           {id: 0, name: 'Steak Dinner', calories: 1200}
       ],
       currentItem: null,
       totalCalories: 0
   }

   return {

    getItems: function(){
           return data.items;
    },
    logData: function(){
           return data;
       }
   }
})();


// UI Controller
const UICtrl = (function(){

    const UISelectors = {
        itemList: '#item-list'
    }

    return {
        populateItemList: function(items){
            let html = '';

            items.forEach(function(item){
            html += `
            <li class="collection-item" id="${item.id}">
            <strong>${item.name}: </strong><em>${item.calories} Calories</em>
            <a href="" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
          </li>
            `
            });

            //Insert list items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
    }
})();


// App Controller
const App = (function(ItemCtrl,UICtrl){

    // Public Methods
    return {
        init: function(){
            console.log('Initializing App...');
            // Fetch items from data structure
            const items = ItemCtrl.getItems();
            console.log(items);

            UICtrl.populateItemList(items)
        }
    }

})(ItemCtrl, UICtrl);

App.init();

