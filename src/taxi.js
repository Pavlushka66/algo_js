/*
https://prepinsta.com/goldman-sachs/technical-test/coding-questions/
A taxi can take multiple passengers to the railway station at the same time.On the way back to the starting point,the taxi driver may pick up additional passengers for his next trip to the airport.A map of passenger location has been created,represented as a square matrix.

The Matrix is filled with cells,and each cell will have an initial value as follows:

A value greater than or equal to zero represents a path.
A value equal to 1 represents a passenger.
A value equal to -1 represents an obstruction.
The rules of motion of taxi are as follows:

The Taxi driver starts at (0,0) and the railway station is at (n-1,n-1).Movement towards the railway station is right or down,through valid path cells.
After reaching (n-1,n-1) the taxi driver travels back to (0,0) by travelling left or up through valid path cells.
When passing through a path cell containing a passenger,the passenger is picked up.once the rider is picked up the cell becomes an empty path cell.
If there is no valid path between (0,0) and (n-1,n-1),then no passenger can be picked.
The goal is to collect as many passengers as possible so that the driver can maximize his earnings.
For example consider the following grid,

           0      1
          -1     0

Start at top left corner.Move right one collecting a passenger. Move down one to the destination.Cell (1,0) is blocked,So the return path is the reverse of the path to the airport.All Paths have been explored and one passenger is collected.

Returns:

Int:maximum number of passengers that can be collected.
Sample Input 0

4  -> size n = 4
4 -> size m = 4
0 0 0 1 -> mat
1 0 0 0
0 0 0 0
0 0 0 0
Output 0

2
Explanation 0

The driver can contain a maximum of 2 passengers by taking the following path
(0,0) → (0,1) → (0,2) → (0,3) → (1,3) → (2,3) → (3,3) → (3,2) → (3,1) → (3,0) → (2,0) → (1,0)  → (0,0)

Sample Input 1

 STD IN                  Function

————              ————-

   3     →  size  n=3
   3    →  size m=3
   0 1 -1 → mat
   1 0 -1
   1 1 1
Sample Output 1

5
Explanation 1

The driver can contain a maximum of 5 passengers by taking the following path
(0,0) → (0,1) → (1,1) → (2,1) → (2,2) → (2,1) → (2,0) → (1,0) → (0,0)
*/
export function taxi(matrix) {
    let result = 0
    if (!matrix.length || !matrix[0].length) {
        return result
    }
    const ylen = matrix.length;
    const xlen = matrix[0].length;

    const queue = [{x:0, y:0, p: []}]
    const paths = []

    while (queue.length) {
        const current = queue.pop()
        const currentValue = matrix[current.y][current.x]
        const passengersOnAPath = [...current.p]
        if (currentValue  < 0) {
            continue // can't go through this cell
        }
        if (currentValue > 0){ // passenger
            passengersOnAPath.push(JSON.stringify({x: current.x, y: current.y}))
        }
        if (current.x + 1 < xlen) {
            queue.push({x: current.x + 1, y: current.y, p: passengersOnAPath})
        }
        if (current.y + 1 < ylen) {
            queue.push({x: current.x, y: current.y + 1, p: passengersOnAPath})
        }
        if (current.x === xlen - 1 && current.y === ylen - 1 && passengersOnAPath.length) { // got to the end with passengers
            paths.push(new Set(passengersOnAPath));
        }
    }

    let pathsSorted = paths.sort((a, b) => a.size - b.size)

    const passengersOnTheWayForward = pathsSorted.pop();
    result += passengersOnTheWayForward?.size ?? 0;

    if(passengersOnTheWayForward && pathsSorted.length) {
        // remove all passengers picked on the way forward and find way with maximum passengers for way back
        passengersOnTheWayForward.forEach(p => pathsSorted.forEach(path => path.delete(p)))
        pathsSorted = pathsSorted.sort((a, b) => a.size - b.size)
        const passengersOnTheWayBack = pathsSorted.pop();
        result += passengersOnTheWayBack.size;
    }

    return  result
}