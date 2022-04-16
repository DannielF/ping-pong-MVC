/**
* Check if a hit with b,
bar(a) - ball(b)

Return boolean
version: 1.0.0
Since: 04/16/2022
*/
const hit = (a, b) => {
  let hit = false;

  // Horizontal collision
  if (b.x + b.width >= a.x && b.x < a.x + a.width) {
    
    // Vertical collision
    if (b.y + b.height >= a.y && b.y < a.y + a.height) {
      hit = true;
    }
  }

  // a collision with b
  if (b.x <= a.x && b.x + b.width >= a.x + a.width ) {

    if (b.y <= a.y && b.y + b.height >= a.y + a.height) {
      hit = true;
    }
  }

  // b collision with a
  if (a.x <= b.x && a.x + a.width >= b.x + b.width) {
      
    if (a.y <= b.y && a.y + a.height >= b.y + b.height) {
      hit = true;
    }
  }

  return hit;
}

export default hit;