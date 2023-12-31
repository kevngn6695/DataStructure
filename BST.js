class Node{
    constructor(data){
        this.left = null;
        this.data = data;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    
    insert(data){
        var new_node = new Node(data);
        if(!this.root || this.root === null){ 
            this.root = new_node;
        }
        else{
            let currentNode = this.root;
            while(true){
                if(data < currentNode.data){
                    if(!currentNode.left){
                        currentNode.left = new_node
                    }
                    currentNode = currentNode.left
                }else{
                    if(!currentNode.right){
                        currentNode.right = new_node
                    }
                    currentNode = currentNode.right
                }
            }
        }
    }
    
    lookup(data){
        if(!this.root) return false;
        
        let currentNode = this.root;
        while(currentNode){
            if(data < currentNode.data){
                currentNode = currentNode.left
            }else if(data > currentNode.data){
                currentNode = currentNode.right
            }else if(data === currentNode.data){
                return currentNode;
            }
        }
        return false;
    }
    remove(data) {
        let currentNode = this.root;
        let parentNode;

        if (!this.root) return;

        while (currentNode) {
            if (currentNode.data > data) {
                parentNode = currentNode;
                currentNode = currentNode.left;
            
            } else if (currentNode.data < data) { 
                parentNode = currentNode;
                currentNode = currentNode.right
                
            } else if (currentNode.data === data) {
                if (currentNode.right === null) {
                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        if (currentNode.data < parentNode.data) {
                            parentNode.left = currentNode.left;
                        } else if (currentNode.data > parentNode.data) {
                            parentNode.right = currentNode.left;
                        }
                    }
                } else if (currentNode.right.left === null) {
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {
                        if (currentNode.data < parentNode.data) {
                            parentNode.left = currentNode.right;
                        } else if (currentNode.data > parentNode.data) {
                            parentNode.right = currentNode.right;
                        }
                    }
                }
            }
        }
    }
}

var bst = new BST()
bst.insert(9)
bst.insert(34)
bst.insert(123)
bst.insert(15)
bst.insert(111)
bst.insert(39)
console.log(bst.lookup(9))


