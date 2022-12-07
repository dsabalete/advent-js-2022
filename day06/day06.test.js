const createCube = require('./day06')

//const cubeOfOne = createCube(1)
// output:
/*
/\_\
\/_/
*/

//const cubeOfTwo = createCube(2)
// output:
/*
 /\_\_\
/\/\_\_\
\/\/_/_/
 \/_/_/
*/

//const cube = createCube(3)
// output:
/*
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/
*/

//console.log(createCube(10))

describe('createCube', () => {
  it('should create a cube of size 1', () => {
    expect(createCube(1)).toEqual(`\/\\_\\\n\\\/_\/`)
  })
  it('should create a cube of size 2', () => {
    expect(createCube(2)).toEqual(
      ` \/\\_\\_\\\n\/\\\/\\_\\_\\\n\\\/\\\/_\/_\/\n \\\/_\/_\/`
    )
  })
  it('should create a cube of size 3', () => {
    expect(createCube(3)).toEqual(
      `  \/\\_\\_\\_\\\n \/\\\/\\_\\_\\_\\\n\/\\\/\\\/\\_\\_\\_\\\n\\\/\\\/\\\/_\/_\/_\/\n \\\/\\\/_\/_\/_\/\n  \\\/_\/_\/_\/`
    )
  })
})
