/*
  methodManager is only for PUT, PACTH and DELETE methods
*/

// this make the response with the list of courses 
const methodManager = (req, res, courses) => {
  const idCourse = req.params.id
  const updateCourse = req.body
  const method = req.method.toUpperCase()

  const indexCourse = courses.findIndex(course => course.id == idCourse)
  if (indexCourse >= 0) {

    switch (method) {
      case 'PUT': 
        putMethodToResolver(courses, indexCourse, updateCourse)
        break

      case 'PATCH': 
        patchMethodToResolver(courses, indexCourse, updateCourse)
        break

      case 'DELETE': 
        deleteMethodToResolver(courses, indexCourse)
        break

      default:
        return console.log(`The method ${method} is not handled`)
    }
    res.json(courses)
  } else {
    res.status(204).end()
  }
}

function putMethodToResolver (courses, indexToFind, updatedCourse) {
  courses[indexToFind] = updatedCourse
}

function patchMethodToResolver (courses, indexToFind, infoToUpdate) {
  const courseToUpdate = courses[indexToFind]
  Object.assign(courseToUpdate, infoToUpdate)
}

function deleteMethodToResolver (courses, indexToFind) {
  courses.splice(indexToFind, 1)
}

module.exports = methodManager