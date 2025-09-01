class linkedlist{
    class node{
        int data
        node next
        node(int data){
            this .data = data
        }
    }
    node head,tail;
    void append(int data){
        node n = new node(data){
            node n =new node(data)
            if(head==null){
                head = n
                tail = n

            }else{
                tail.next =n
                tail = n
            }
        }
        void display(){
            node temp = head
            while(temp!=null){
                print(temp.data)
            }
        }
    }

}