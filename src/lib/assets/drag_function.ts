export function drag_window(node:any) {
    let moving = false;
    let left = 0;
    let top = 50;

    node.style.position = 'absolute';
    node.style.top = `${top}px`;
    node.style.left = `${left}px`;
   //  node.style.cursor = 'move';
    node.style.userSelect = 'none';

    node.addEventListener('mousedown', (e:any) => {
       if (e.clientY < top + 30) {
           moving = true;
       }
    });
    
   window.addEventListener('mousemove', (e) => {
         if (moving) {
                left += e.movementX;
                top += e.movementY;
                node.style.top = `${top}px`;
                node.style.left = `${left}px`;
           }
    //    if (maximized) {
    //        top = 0
    //        left = 0
    //        node.style.top = `${top}px`;
    //        node.style.left = `${left}px`;
    //    }
    });
   
    window.addEventListener('mouseup', () => {
        moving = false;
    });

}